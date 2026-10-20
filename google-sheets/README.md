# Contact and newsletter sheet (Google Drive)

Every contact form message and newsletter signup is added as a new row in one
Google Sheet. It has two tabs, **Contact** and **Newsletter**. The sheet lives
in your Google Drive, so you can share it like any other file.

## One-time setup

1. In Google Drive, create a new Google Sheet (name it e.g. "Pacell Website Leads").
2. Open **Extensions > Apps Script**, delete the sample code and paste in
   [Code.gs](./Code.gs).
3. Replace `PASTE_THE_SAME_SECRET_AS_GOOGLE_SHEET_SECRET` with a long random
   password you make up. Also replace `PASTE_YOUR_GOOGLE_SHEET_ID` with the ID
   from the sheet's URL (`docs.google.com/spreadsheets/d/<ID>/edit`). Save.
4. Click **Deploy > New deployment > type: Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy, approve the permissions, and copy the **Web app URL**.
5. Add two environment variables to the site (`.env.local` for local work, and
   in the Vercel project settings for the live site):

   ```
   GOOGLE_SHEET_WEBHOOK_URL=<the Web app URL>
   GOOGLE_SHEET_SECRET=<the same password from step 3>
   ```
6. Redeploy / restart the site.

The tabs and their header rows are created automatically on the first
submission.

## Sharing

Open the sheet, click **Share** and add the person's email. To download as
Excel: **File > Download > Microsoft Excel (.xlsx)**.

## If you change Code.gs later

Use **Deploy > Manage deployments > Edit > New version**, otherwise the live
URL keeps running the old code.
