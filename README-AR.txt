ملفات البورتفوليو المعدلة

انسخ الملفات إلى مشروعك مع الحفاظ على نفس المجلدات:
app/layout.tsx
app/page.tsx
app/globals.css
components/Reveal.tsx
components/ThemeToggle.tsx
data/portfolio.ts

المجلد public لم يتم تضمينه أو تعديله، احتفظ بالصور والأيقونات الموجودة عندك.

أهم التعديلات:
- إصلاح وضع Light Mode ليطابق data-theme.
- تنسيق زر الثيم وتحسين الوصول بلوحة المفاتيح.
- تحسين استجابة الصفحة والمشاريع للموبايل والتابلت.
- إصلاح عرض الإحصائيات على الهواتف الضيقة.
- تحسين سلوك التنقل والتمرير والأزرار.
- الحفاظ على كل المشاريع والروابط والخبرات كما هي.

للتجربة: npm run dev
للبناء: npm run build
بعد التأكد: git add . && git commit -m "Polish portfolio UI and fix theme" && git push
