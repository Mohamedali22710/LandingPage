const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
        msg.textContent = "من فضلك املأ كل الحقول";
        msg.className = "text-red-500 mt-4";
        return;
    }

    if (!/^01[0-9]{9}$/.test(phone)) {
        msg.textContent = "رقم واتساب غير صحيح";
        msg.className = "text-red-500 mt-4";
        return;
    }

    msg.textContent = "تم إرسال رسالتك بنجاح 🎉";
    msg.className = "text-green-600 mt-4";

    form.reset();

    console.log({ name, phone, message });
});
