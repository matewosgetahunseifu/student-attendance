# SMIS Web Starter v1.1

Responsive front-end prototype for a Student Management Information System.

## Open it
1. Extract the ZIP file.
2. Open `SMIS_Web_Starter/index.html` in a modern browser.

## Included in this version
- Responsive dashboard navigation
- English / Amharic interface toggle
- Student registration with review-before-save and generated registration codes
- Student register search
- Edit student information
- Withdraw/deactivate a student while retaining their row in this demo; withdrawn students are excluded from attendance entry and active student totals
- Restore a withdrawn student
- Explicitly confirmed permanent deletion for demo records
- Local demo attendance statuses (Present / Absent / Permission)
- Placeholder pages for assessment, rank, reports, and settings

## Important limitations
- This is a browser-only prototype. Student and attendance data are held in page memory and will be lost when the page is refreshed or closed.
- There is no login/authentication, secure database, server-side authorization, audit log, or backup/restore.
- The delete button permanently removes the record from the current demo session and is not a production-grade audited deletion workflow.
- Do not enter real student data or real grades.
- Before production, implement authenticated storage, institution-level data isolation, permissions, audited status changes, backups, and tested restore procedures.
