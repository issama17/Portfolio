# CTF Platform — Production Deployment Guide
### DigitalOcean · Ubuntu 24.04 LTS · Gunicorn + Nginx
### Updated & battle-tested — synchronized with full deployment session

> **Stack confirmed from your codebase:**
> Flask 3 OOP app (`ApplicationCTF` class) · Neon PostgreSQL · Cloudinary · Google OAuth · Brevo HTTP API (email) · ProxyFix configured · Gunicorn in `requirements.txt` · Live at `https://ctflab-casi.duckdns.org`

---

## Phase 1 — SSH Key Generation & Droplet Creation

### 1.1 Generate an ED25519 Key Pair (Windows CMD)

> **Windows note:** `~/.ssh/` bash syntax does NOT work in CMD. Use `%USERPROFILE%` instead.

```cmd
rem Create the .ssh folder if it doesn't exist (safe to run even if it does)
mkdir %USERPROFILE%\.ssh

rem Generate the key pair
ssh-keygen -t ed25519 -C "ctf-digitalocean" -f %USERPROFILE%\.ssh\ctf_do_key
```

Enter a passphrase when prompted (recommended), or press Enter twice to skip.

```cmd
rem Print the public key — copy this entire line into DigitalOcean
type %USERPROFILE%\.ssh\ctf_do_key.pub
```

### 1.2 Add the Public Key to DigitalOcean

1. In the DigitalOcean dashboard, scroll to **Authentication → SSH Keys → Add SSH Key**.
2. Paste the full `ssh-ed25519 AAAA...` line.
3. Name it `ctf-deploy` and click **Add SSH Key**.
4. Click **Create Droplet**.

### 1.3 Obtain Your Droplet's Public IP

After creation (~30 seconds), find your **Public IPv4** on the droplet's Overview page.

> Your IP: `46.101.201.45`

### 1.4 Configure Your Local SSH Client (Windows)

```cmd
notepad %USERPROFILE%\.ssh\config
```

If Notepad asks to create the file, click **Yes**. Paste:

```
Host ctf-server
    HostName 46.101.201.45
    User root
    IdentityFile C:\Users\Issam_ch4\.ssh\ctf_do_key
```

Save (`Ctrl+S`) and close. Connect with:

```cmd
ssh ctf-server
```

> **If `ssh ctf-server` gives "No such host":** Notepad may have saved it as `config.txt`.
> Fix: `rename %USERPROFILE%\.ssh\config.txt config`
>
> **Alternative — skip the config entirely:**
> ```cmd
> ssh -i %USERPROFILE%\.ssh\ctf_do_key root@46.101.201.45
> ```

---

## Phase 2 — Server Access & Baseline Security

### 2.1 First Login

```bash
ssh -i %USERPROFILE%\.ssh\ctf_do_key root@46.101.201.45
```

Accept the host fingerprint (`yes`). You are now root on your droplet.

### 2.2 System Update & Package Installation

```bash
apt update && apt upgrade -y

apt install -y \
    git \
    python3-pip \
    python3-venv \
    python3-dev \
    nginx \
    ufw \
    curl \
    unzip \
    build-essential \
    libpq-dev \
    iptables
```

> **Note:** `apt update && apt upgrade -y` on a fresh Ubuntu 24.04 takes 3–10 minutes. The `0% [Working]` display is normal — wait for the prompt to return.
>
> `iptables` is included here because Ubuntu 24.04 has a UFW bug where `ufw enable` aborts without it.

### 2.3 Create a Dedicated Non-Root User

```bash
adduser --disabled-password --gecos "" ctfapp
mkdir -p /home/ctfapp
chown ctfapp:ctfapp /home/ctfapp
```

### 2.4 Configure the Firewall (UFW)

```bash
ufw default deny incoming
ufw default allow outgoing
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
ufw status verbose
```

> **Ubuntu 24.04 UFW bug:** If `ufw enable` says "Aborted" even after typing `y`, run:
> ```bash
> apt install -y iptables
> ufw enable
> ```
> Status should now show **active**.

### 2.5 Fix Static File Permissions for Nginx

Nginx runs as `www-data` and needs read access to your app's home directory:

```bash
chmod 755 /home/ctfapp
chmod -R 755 /home/ctfapp/app/static
```

> **Skip this step now** — run it after cloning the repo in Phase 3. If you see 403 errors on images/CSS after deployment, this is the fix.

### 2.6 Create a 2 GB Swap File

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
swapon --show
free -h
echo '/swapfile none swap sw 0 0' >> /etc/fstab
echo 'vm.swappiness=10' >> /etc/sysctl.conf
sysctl -p
```

### 2.7 Harden SSH (Optional but Recommended)

```bash
nano /etc/ssh/sshd_config
```

Set:
```
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

```bash
systemctl restart sshd
```

**Open a second terminal and test before closing your current session.**

---

## Phase 3 — Code Deployment & Environment Setup

### 3.1 Switch to the App User

```bash
su - ctfapp
```

### 3.2 Clone the Repository

```bash
cd /home/ctfapp
git clone https://github.com/issama17/ctf_production.git app
cd app
```

> The repo already contains `wsgi.py`, `app.py`, `models.py`, `routes.py`, `services.py`, `static/`, `templates/` — everything needed. The only things not in the repo (by design) are `venv/`, `.env`, and the SQLite `instance/` folder.

### 3.3 Create & Activate the Python Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
pip install python-dotenv psycopg2-binary
```

### 3.4 Configure Environment Variables

```bash
nano /home/ctfapp/app/.env
```

Paste the following complete `.env` (fill in your values):

```dotenv
# ── Flask Core ────────────────────────────────────────────────────────────────
FLASK_ENV=production
FLASK_APP=wsgi.py
SECRET_KEY=your-super-secret-key-configured-here
CTF_URL=https://ctflab-casi.duckdns.org

# ── Database (Neon PostgreSQL) ────────────────────────────────────────────────
DATABASE_URL=postgresql://neondb_owner:YOUR_DATABASE_PASSWORD@ep-your-database-pooler.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require

# ── Google OAuth ──────────────────────────────────────────────────────────────
GOOGLE_CLIENT_ID=your-google-oauth-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret

# ── Cloudinary ────────────────────────────────────────────────────────────────
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# ── Email (Brevo HTTP API — bypasses DigitalOcean SMTP port block) ────────────
SMTP_SERVER=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your-brevo-smtp-user@smtp-brevo.com
SMTP_PASSWORD=your-brevo-api-key-here
SMTP_FROM=your-verified-sender-email@gmail.com

# ── CTF Flags ─────────────────────────────────────────────────────────────────
FLAG_SQLI=CTF{sql_1nj3ct10n_byp4ss_m4st3r}
FLAG_SQLI_HASH=fef04c3b194d8da13d1aa49787dff526a0ae3932d1eaeab509e71a998d22c4fb
```

> **Important notes:**
> - `CTF_URL` must NOT have a duplicate prefix. It should be exactly `CTF_URL=https://ctflab-casi.duckdns.org` — not `CTF_URL=CTF_URL=...`
> - `SMTP_PASSWORD` here is the **Brevo API key**, not an SMTP password. The email sending code uses the HTTP API to bypass DigitalOcean's outbound SMTP port block.
> - `DATABASE_URL` must start with `postgresql://` not `postgres://` — SQLAlchemy requires the former.

Save with `Ctrl+O` → Enter → `Ctrl+X`, then lock down permissions:

```bash
chmod 600 /home/ctfapp/app/.env
```

### 3.5 The WSGI Entry Point

Your repo already has `wsgi.py` committed. Verify it exists:

```bash
cat /home/ctfapp/app/wsgi.py
```

It should import `ApplicationCTF` and expose `.app`. If it's missing for any reason, recreate it:

```bash
cat > /home/ctfapp/app/wsgi.py << 'EOF'
import os
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))
from app import ApplicationCTF
_instance = ApplicationCTF()
application = _instance.app
app = application
EOF
```

### 3.6 Initialize the Database

```bash
cd /home/ctfapp/app
source venv/bin/activate

python3 - << 'EOF'
import os
from dotenv import load_dotenv
load_dotenv('.env')
from app import ApplicationCTF
inst = ApplicationCTF()
print("Database initialized successfully.")
EOF
```

You should see `Database initialized successfully.` — this creates all tables on your Neon PostgreSQL database.

### 3.7 Fix Static File Permissions

```bash
exit   # back to root
chmod 755 /home/ctfapp
chmod -R 755 /home/ctfapp/app/static
```

---

## Phase 4 — Production Stack: Gunicorn + Nginx

### 4.1 Test Gunicorn Manually

Switch to ctfapp and test:

```bash
su - ctfapp
cd /home/ctfapp/app
source venv/bin/activate

gunicorn \
    --workers 2 \
    --bind 127.0.0.1:8000 \
    --timeout 120 \
    wsgi:application
```

In a **second terminal** (open DigitalOcean Web Console or a new SSH session), test:

```bash
curl http://127.0.0.1:8000
```

If it returns HTML — Gunicorn works. Press `Ctrl+C` in the first terminal to stop it.

> **Can't open a browser on the server** — use `curl` instead. The browser test on `http://YOUR_IP:8000` is done from your PC, not the server terminal.

### 4.2 Create the Gunicorn systemd Service

Exit back to root first:

```bash
exit   # must be root to write to /etc/systemd/
whoami # confirm: root
```

```bash
nano /etc/systemd/system/ctfplatform.service
```

Paste:

```ini
[Unit]
Description=CTF Platform — Gunicorn WSGI Server
After=network.target
Wants=network.target

[Service]
User=ctfapp
Group=ctfapp
WorkingDirectory=/home/ctfapp/app
EnvironmentFile=/home/ctfapp/app/.env
Environment="PATH=/home/ctfapp/app/venv/bin"

ExecStart=/home/ctfapp/app/venv/bin/gunicorn \
    --workers 3 \
    --worker-class sync \
    --bind unix:/run/ctfplatform/gunicorn.sock \
    --pid /run/ctfplatform/gunicorn.pid \
    --access-logfile /var/log/ctfplatform/access.log \
    --error-logfile /var/log/ctfplatform/error.log \
    --log-level info \
    --timeout 120 \
    --keep-alive 5 \
    --max-requests 1000 \
    --max-requests-jitter 100 \
    wsgi:application

RuntimeDirectory=ctfplatform
RuntimeDirectoryMode=0755

Restart=on-failure
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

> **Note:** `StartLimitIntervalSec` is removed from `[Service]` — Ubuntu 24.04 systemd logs a warning if it's there. It belongs in `[Unit]` only if needed.

```bash
mkdir -p /var/log/ctfplatform
chown ctfapp:ctfapp /var/log/ctfplatform

systemctl daemon-reload
systemctl enable ctfplatform
systemctl start ctfplatform
systemctl status ctfplatform
```

### 4.3 Configure Nginx

```bash
rm /etc/nginx/sites-enabled/default
nano /etc/nginx/sites-available/ctfplatform
```

Paste:

```nginx
upstream ctfplatform_app {
    server unix:/run/ctfplatform/gunicorn.sock fail_timeout=0;
}

server {
    listen 80;
    listen [::]:80;
    server_name ctflab-casi.duckdns.org;

    add_header X-Frame-Options        "SAMEORIGIN"   always;
    add_header X-Content-Type-Options "nosniff"      always;
    add_header X-XSS-Protection       "1; mode=block" always;
    add_header Referrer-Policy        "strict-origin" always;

    access_log /var/log/nginx/ctfplatform_access.log;
    error_log  /var/log/nginx/ctfplatform_error.log;

    location /static/ {
        alias /home/ctfapp/app/static/;
        expires 30d;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    location = /favicon.png {
        alias /home/ctfapp/app/static/favicon.png;
        expires 30d;
        access_log off;
    }

    location / {
        proxy_pass          http://ctfplatform_app;
        proxy_redirect      off;
        proxy_set_header    Host              $host;
        proxy_set_header    X-Real-IP         $remote_addr;
        proxy_set_header    X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header    X-Forwarded-Proto $scheme;
        proxy_connect_timeout   60s;
        proxy_send_timeout      120s;
        proxy_read_timeout      120s;
        proxy_buffering         on;
        proxy_buffer_size       8k;
        proxy_buffers           8 8k;
    }

    client_max_body_size 20M;
}
```

```bash
ln -s /etc/nginx/sites-available/ctfplatform /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
systemctl enable nginx
```

---

## Phase 5 — HTTPS with DuckDNS + Let's Encrypt

### 5.1 Set Up Your Free DuckDNS Domain

1. Go to [duckdns.org](https://duckdns.org) and log in with Google.
2. Create a subdomain — your domain is `ctflab-casi.duckdns.org`.
3. **Manually type** `46.101.201.45` in the IP field and click **Update IP**.
   > DuckDNS auto-detects your local PC's IP — you must override it with the server IP manually.
4. Verify DNS propagated correctly:
   ```bash
   nslookup ctflab-casi.duckdns.org 8.8.8.8
   ```
   Must return `46.101.201.45` before running certbot.

### 5.2 Install Certbot and Get the Certificate

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d ctflab-casi.duckdns.org
```

Follow the prompts — enter your email, agree to terms. If it asks whether to reinstall an existing cert, press `1`.

Upon success you'll see:
```
Congratulations! You have successfully enabled HTTPS on https://ctflab-casi.duckdns.org
```

Certbot automatically rewrites your Nginx config for HTTPS.

### 5.3 Update .env and Restart

```bash
nano /home/ctfapp/app/.env
```

Ensure this line is exactly:
```dotenv
CTF_URL=https://ctflab-casi.duckdns.org
```

> **Common mistake:** Do NOT write `CTF_URL=CTF_URL=https://...` — the key name must appear only once.

```bash
systemctl restart ctfplatform
```

### 5.4 Update Google OAuth

Go to [Google Cloud Console](https://console.cloud.google.com) → **APIs & Services → Credentials → your OAuth 2.0 Client ID**.

Under **Authorized redirect URIs**, add:
```
https://ctflab-casi.duckdns.org/google/auth
```

Under **Authorized JavaScript origins**, add:
```
https://ctflab-casi.duckdns.org
```

> **Do not add raw IPs** — Google OAuth rejects them. Keep your existing Vercel URIs so the old deployment still works.

Save and wait ~1 minute for Google to propagate. Then test Google login at `https://ctflab-casi.duckdns.org`.

### 5.5 Verify Certificate Auto-Renewal

```bash
systemctl status certbot.timer
```

Certificates renew automatically every 90 days.

---

## Phase 6 — Email: Brevo HTTP API

> **Why not SMTP?** DigitalOcean blocks all outbound SMTP ports (25, 465, 587) on new accounts as an anti-spam measure. The fix is to use Brevo's **HTTP API** which goes over port 443 (HTTPS) — always open.

### 6.1 How It Works

Your `services.py` was modified to call Brevo's REST API directly instead of using `smtplib`. The key change in the `envoyer_email_reinitialisation` function:

```python
import urllib.request
import json

# ... inside the function ...
try:
    resend_key = os.getenv("SMTP_PASSWORD")   # holds the Brevo API key
    payload = json.dumps({
        "sender": {"email": expediteur},
        "to": [{"email": email}],
        "subject": sujet,
        "htmlContent": html_content
    }).encode("utf-8")
    req = urllib.request.Request(
        "https://api.brevo.com/v3/smtp/email",
        data=payload,
        headers={
            "api-key": resend_key,
            "Content-Type": "application/json"
        }
    )
    urllib.request.urlopen(req, timeout=10)
    self.__logger.info(f"E-mail envoyé via Brevo à {email}.")
    return True
except Exception as e:
    self.__logger.error(f"Erreur Brevo à {email}: {e}")
    return False
```

### 6.2 Brevo Credentials

- **API Key** (goes in `SMTP_PASSWORD`): get from [app.brevo.com](https://app.brevo.com) → API Keys
- **SMTP_FROM**: use `room13780@gmail.com` (your verified sender)
- The `SMTP_SERVER`, `SMTP_PORT`, `SMTP_USER` variables are kept in `.env` but unused by the HTTP API code

### 6.3 Debug Email Issues

```bash
journalctl -u ctfplatform -n 30 --no-pager | grep -i "brevo\|erreur\|error\|smtp"
```

---

## Phase 7 — Workflow: Local Development → Server Deployment

### 7.1 Your Repositories

- **Production repo:** `https://github.com/issama17/ctf_production.git`
- **Server path:** `/home/ctfapp/app`

### 7.2 One-Time Local Setup

```cmd
git clone https://github.com/issama17/ctf_production.git
cd ctf_production
code .
```

### 7.3 Deploy Changes (Standard Workflow)

**On your local machine** after making changes:

```bash
git add .
git commit -m "describe your change"
git push
```

**On the server:**

```bash
cd /home/ctfapp/app && git pull && systemctl restart ctfplatform
```

### 7.4 GitHub Authentication

If `git push` asks for a password, use a **Personal Access Token** (not your GitHub password):

GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token → check `repo` scope.

To embed the token so you're never asked again:

```bash
git remote set-url origin https://issama17:YOUR_TOKEN@github.com/issama17/ctf_production.git
```

---

## Phase 8 — Operations Reference

### Check Service Status

```bash
systemctl status ctfplatform
systemctl status nginx
```

### View Live Logs

```bash
# App logs (Gunicorn + Flask)
journalctl -u ctfplatform -n 100 -f

# Nginx error log
tail -f /var/log/nginx/ctfplatform_error.log

# Gunicorn access log
tail -f /var/log/ctfplatform/access.log
```

### Restart After a Code Change

```bash
cd /home/ctfapp/app && git pull && systemctl restart ctfplatform
```

### Check Memory & Swap

```bash
free -h
```

### Check Disk Usage

```bash
df -h
```

### Verify Database Connection

```bash
cat /home/ctfapp/app/.env | grep DATABASE_URL
```

### Verify Static Files are Accessible

```bash
curl -I https://ctflab-casi.duckdns.org/static/images/logo.png
# Should return: HTTP/2 200
```

If it returns 403, rerun the permissions fix:

```bash
chmod 755 /home/ctfapp
chmod -R 755 /home/ctfapp/app/static
```

---

## Architecture Summary

```
Internet (HTTPS :443)
    │
    ▼
┌─────────────────────────────────────┐
│  Nginx (reverse proxy)              │
│  • TLS termination (Let's Encrypt)  │
│  • Serves /static/ directly         │
│  • Security headers                 │
│  • Forwards ProxyFix headers        │
└──────────┬──────────────────────────┘
           │  Unix socket
           ▼
┌─────────────────────────────────────┐
│  Gunicorn (3 sync workers)          │
│  • wsgi:application entry point     │
│  • Managed by systemd               │
│  • Auto-restarts on failure         │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Flask (ApplicationCTF)             │
│  • Neon PostgreSQL (cloud)          │
│  • Cloudinary (image uploads)       │
│  • Google OAuth                     │
│  • Brevo HTTP API (email)           │
│  • ProxyFix middleware              │
└─────────────────────────────────────┘

External services:
  Neon     → ep-young-sky-ap78r6c5-pooler.c-7.us-east-1.aws.neon.tech
  Brevo    → api.brevo.com/v3/smtp/email
  Cloudinary → api.cloudinary.com
  DuckDNS  → ctflab-casi.duckdns.org → 46.101.201.45
```

---

*Live at: `https://ctflab-casi.duckdns.org` · Server: `46.101.201.45` · DigitalOcean Frankfurt FRA1 · Ubuntu 24.04 LTS · 1 vCPU / 1 GB RAM / 25 GB SSD + 2 GB Swap*
