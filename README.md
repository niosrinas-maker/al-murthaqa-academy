# Al Murthaqa Quran Academy - Website

React + Tailwind frontend, Google Sheets (Apps Script) backend, Razorpay payments. 100% free stack.

## Part 1 - Google Sheet backend (do this first)

1. Go to https://sheets.google.com and create a blank sheet named **Al Murthaqa Registrations**.
2. Menu: **Extensions > Apps Script**.
3. Delete the sample code, paste all of `apps-script/Code.gs`, and click **Save**.
4. Change `TEAM_PIN` at the top if you want a PIN other than 1234.
5. In the function dropdown choose **setup** and click **Run**. Approve the permission prompts
   (Advanced > "Go to project (unsafe)" > Allow). This creates the `Registrations` tab with headers.
6. Click **Deploy > New deployment**.
   - Click the gear icon next to "Select type" and choose **Web app**.
   - Description: `v1`
   - **Execute as: Me**
   - **Who has access: Anyone**
   - Click **Deploy**.
7. Copy the **Web app URL** (ends with `/exec`).
8. Test: open that URL in a browser. You should see `{"ok":true,"message":"Al Murthaqa registration endpoint is running."}`.

> Whenever you edit Code.gs later: **Deploy > Manage deployments > pencil icon > Version: New version > Deploy**.
> The URL stays the same.

## Part 2 - Frontend

```bash
npm install
npm run dev        # http://localhost:5173
```

Open `src/config.js` and set:

| Key | What to put |
|---|---|
| `RAZORPAY_KEY_ID` | Your `rzp_test_...` Key ID (Razorpay Dashboard > Account & Settings > API Keys) |
| `APPS_SCRIPT_URL` | The `/exec` URL from Part 1 |
| `ADMIN_PHONE` | Admin WhatsApp number, 10 digits, no +91 |
| `TEAM_PIN` | Same PIN as in Code.gs |

Pages: `/` public site, `/team` hidden ground-team portal.

### Testing payments
Use Razorpay **test mode**. Test UPI ID: `success@razorpay`. Test card: `4111 1111 1111 1111`, any future expiry, any CVV.
When you go live, switch the key to `rzp_live_...`.

### Free hosting
`npm run build` creates `dist/`. Upload it to Netlify, Vercel, or Cloudflare Pages (all free).
`public/_redirects` and `vercel.json` are included so `/team` works when the page is refreshed.

## Security notes (read these)

- **Razorpay has no server check here.** Without a backend, the site trusts the browser's "payment success" callback.
  A technical person could fake it. The Razorpay Payment ID is saved in every row and sent in the WhatsApp message:
  verify it against Razorpay Dashboard > Transactions before activating a student.
- **The team PIN is visible in the website code.** It keeps casual visitors out, but the PIN is also checked on the
  server, so only someone who knows it can add rows. Change it periodically.
- If the sheet save fails after payment, the record is kept in the phone's `localStorage` key `amqa_unsaved`
  and the WhatsApp message still reaches the admin.
