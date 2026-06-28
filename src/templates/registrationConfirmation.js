export const registrationConfirmationTemplate = ({
  userName,
  webinarTitle,
  date,
  time,
  venue,
  meetingLink,
}) => ({
  subject: `🎉 Registration Confirmed – ${webinarTitle}`,

  html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>${webinarTitle}</title>
</head>

<body style="margin:0;padding:0;background:#f7f5f2;font-family:Arial,sans-serif;color:#333;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 15px;">

<table width="620" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.08);">

<tr>
<td align="center"
style="background:#7B2E4D;padding:45px 30px;color:#fff;">

<h1 style="margin:0;font-size:30px;">
🎉 You're Registered!
</h1>

<p style="margin-top:12px;font-size:18px;">
${webinarTitle}
</p>

</td>
</tr>

<tr>
<td style="padding:40px;">

<p style="font-size:17px;">
Dear <strong>${userName}</strong>,
</p>

<p>
Thank you for registering for our FREE live webinar.
We're looking forward to welcoming you to this powerful
90-minute session.
</p>

<div style="
background:#FDF6F8;
border-left:4px solid #7B2E4D;
padding:20px;
border-radius:8px;
margin:30px 0;
">

<h3 style="margin-top:0;color:#7B2E4D;">
📅 Webinar Details
</h3>

<p style="margin:8px 0;">
<strong>Date:</strong> ${date}
</p>

<p style="margin:8px 0;">
<strong>Time:</strong> ${time}
</p>

<p style="margin:8px 0;">
<strong>Mode:</strong> ${venue}
</p>

</div>

<div style="text-align:center;margin:35px 0;">

<a
href="${meetingLink}"
style="
background:#7B2E4D;
color:#fff;
padding:16px 36px;
text-decoration:none;
border-radius:8px;
font-weight:bold;
font-size:16px;
display:inline-block;
">
Join Webinar
</a>

</div>

<h3 style="color:#7B2E4D;">
What You'll Experience
</h3>

<ul style="padding-left:20px;line-height:1.8;">
<li>✔ Understand why relationships feel stuck.</li>
<li>✔ Learn practical emotional healing tools.</li>
<li>✔ Discover how change begins with you.</li>
<li>✔ Participate in a live Q&A with Khushboo.</li>
</ul>

<div style="
background:#FFF8E6;
padding:18px;
border-radius:8px;
margin-top:30px;
">

<strong>Reminder</strong>

<p style="margin-bottom:0;">
Please join the webinar 10 minutes before the scheduled
start time to ensure a smooth experience.
</p>

</div>

<p style="margin-top:35px;">
We can't wait to see you there.
</p>

<p>
Warm regards,<br>
<strong>Khushboo Khushnay</strong><br>
Relationship Coach & Healer
</p>

</td>
</tr>

<tr>

<td
align="center"
style="
background:#F5F5F5;
padding:25px;
font-size:13px;
color:#777;
">

You're receiving this email because you registered for
<strong>${webinarTitle}</strong>.

<br><br>

© 2026 Khushboo Khushnay. All Rights Reserved.

</td>

</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
});
