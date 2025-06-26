# Form Setup Guide for Laurels International School Website

## Current Form Status
Your website has 2 forms that need to be configured:
1. **Contact Form** (contact.html) - For general inquiries
2. **Admission Form** (admission.html) - For admission inquiries

## Option 1: Formspree (Recommended - Easiest)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create 2 forms:
   - Contact Form
   - Admission Form

### Step 2: Get Your Form IDs
After creating forms, you'll get URLs like:
- `https://formspree.io/f/xaybzwkd` (Contact)
- `https://formspree.io/f/abc123def` (Admission)

### Step 3: Update Your HTML Files
Replace `YOUR_FORM_ID` in the files:

**In contact.html:**
```html
<form action="https://formspree.io/f/xaybzwkd" method="POST">
```

**In admission.html:**
```html
<form action="https://formspree.io/f/abc123def" method="POST">
```

### Step 4: Test
- Submit forms from your website
- Check your email for submissions
- Check Formspree dashboard for all submissions

## Option 2: Google Forms (Alternative)

### Step 1: Create Google Forms
1. Go to [forms.google.com](https://forms.google.com)
2. Create 2 forms with matching fields
3. Get the form URLs

### Step 2: Update HTML
Replace form actions with Google Form URLs.

## Option 3: Custom PHP Solution

If you have a web server with PHP:

### Step 1: Update mail/contact.php
```php
<?php
// Update this email address
$to = "your-email@laurelsinternationalschool.edu";

// Rest of the code remains the same
?>
```

### Step 2: Update Form Actions
Change form actions back to:
```html
<form action="mail/contact.php" method="POST">
```

## Option 4: Netlify Forms (If Using Netlify)

If deploying to Netlify, add `netlify` attribute:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" netlify>
```

## Form Fields Explained

### Contact Form Fields:
- `name` - Person's name
- `email` - Email address
- `phone` - Phone number
- `message` - Their message

### Admission Form Fields:
- `name` - Parent/Guardian name
- `email` - Email address
- `phone` - Phone number
- `program` - Selected program
- `message` - Additional information

## Testing Your Forms

1. **Local Testing:**
   - Open your website files in a browser
   - Fill out and submit forms
   - Check if you receive emails

2. **Live Testing:**
   - Upload to a web server
   - Test from different devices
   - Verify email delivery

## Troubleshooting

### Forms Not Working?
1. Check if form action URLs are correct
2. Verify Formspree account is active
3. Check spam folder for emails
4. Ensure all required fields are filled

### Emails Not Received?
1. Check Formspree dashboard
2. Verify email address in settings
3. Check spam/junk folder
4. Test with different email providers

## Security Notes

- Formspree includes spam protection
- All form data is encrypted
- No sensitive data is stored permanently
- GDPR compliant

## Next Steps

1. Choose your preferred option (Formspree recommended)
2. Set up your forms
3. Test thoroughly
4. Update contact information in forms
5. Consider adding form validation messages

## Support

- Formspree: [help.formspree.io](https://help.formspree.io)
- Google Forms: [support.google.com/forms](https://support.google.com/forms)
- For custom solutions, contact your web developer 