---
title: "Contact"
date: 2020-03-21T14:16:01+13:00
---
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"></script>

You can email us here, or find out how to get in touch by phone below.

<form id="contact-form" action="javascriptrequired" method="POST">
      <div class="form-group">
            <label for="nameField">Your name:</label>
            <input id="nameField" class="form-control" type="text" name="name" placeholder="Joseph Bloggs" required>
      </div>
        <input name="_formsubmit_id" type="text" style="display:none">
      <div class="form-group">
        <label for="emailField">Your email:</label>
        <input id="emailField" class="form-control" type="email" name="_replyto" placeholder="joebloggs@example.com" required>
      </div>
      <div class="form-group">
        <label for="messageField">Your message:</label>
        <textarea id="messageField" class="form-control" name="message" placeholder="Your message" rows="3" required></textarea>
      </div>
      <input type="hidden" name="_subject" value="New email from website" />
      <input type="hidden" name="_redirect" value="//mainlandbigband.co.nz/contact/thanks/" />
      <div class="form-group">
            <label>Captcha challenge (this stops spam):</label>
            <div id="cf-turnstile"></div>
      </div>
      <input type="submit" value="Send">
</form>

Repertoire
----------
Whether you require background music to accompany a meal or cocktails, or the need to get those feet moving with dance music appropriate for the ages and tastes of your guests (or both), we can oblige. If we don’t already have a particular piece in our repertoire that you would like, we may be able to prepare it especially for you, providing we have sufficient notice.

Affordability
-------------
Don’t think that a band this size might be too expensive - it’s NOT!

Contact us now and find out just how affordable we are.

We also make our own booking arrangements, hence...

*NO AGENCY FEES*

Phone
-----
<address>
    <strong>Colin Eaton (Musical Director)</strong>
    <a href="tel:+64274411490">(027) 441-1490</a>
</address>
<address>
    <strong>Max Wright (President)</strong>
    <a href="tel:+6433776542">(03) 377-6542</a> or <a href="tel:+64274379351">(027) 437-9351</a>
</address>

<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMainlandBigBand%20%20&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<script>

turnstile.ready(function () {
    turnstile.render('#cf-turnstile', {
        sitekey: '0x4AAAAAAAWYuJvt7r8iZbdK',
        callback: function() {
            document.getElementById('contact-form').action = 'https://formsubmit.io/send/info@mainlandbigband.co.nz';
        },
    });
});
</script>