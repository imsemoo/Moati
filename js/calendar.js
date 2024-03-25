// بيانات الحدث
const events = {
  '2024-03-17': [
    { title: 'احتفال يوم القديس باتريك', description: 'انضم إلينا ليوم أخضر مليء بالفعاليات!' },
    { title: 'امتحان الرياضيات', description: 'امتحان الحساب الساعة 10 صباحًا.' }
  ],
  // إضافة المزيد من الأحداث لتواريخ أخرى حسب الحاجة
};

// التنقل بين الشهور (مبسط)
let currentMonth = 2; // مارس (مؤشر يبدأ من الصفر)
let currentYear = 2024;

// وظيفة لتوليد أيام التقويم
function generateCalendar(year, month) {
  const calendarContainer = document.querySelector('#calendar');
  calendarContainer.innerHTML = ''; // مسح التقويم السابق

  // تعديل اسم الشهر
  const monthNames = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
 //s document.getElementById('monthName').textContent = `${monthNames[month]} ${year}`;
  document.getElementById('monthName').textContent = `${monthNames[month]}`;

  // تحديد عدد الأيام في الشهر
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // الحصول على تاريخ اليوم
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElem = document.createElement('div');
    dayElem.classList.add('day');
    dayElem.textContent = i;
    
    const dateString = `${year}-${(month+1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;

    // جعل اليوم الحالي نشطًا
    if (year === todayYear && month === todayMonth && i === todayDate) {
      dayElem.classList.add('active'); // إضافة فئة لتمييز اليوم الحالي
    }

    if (events[dateString]) {
      const eventsCount = events[dateString].length;
      const eventsElem = document.createElement('div');
      eventsElem.classList.add('event');
      eventsElem.textContent = ` ${eventsCount}`;
      eventsElem.onclick = function() { showEventsDetails(dateString); };
      dayElem.appendChild(eventsElem);
    }
  
    calendarContainer.appendChild(dayElem);
  }
}

// يمكنك إضافة تعريفات CSS للفئة 'active' لتمييز اليوم الحالي بشكل واضح، مثل:
// .calendar-container .day.active { background-color: #blue; color: white; }


// وظيفة لعرض تفاصيل الأحداث
function showEventsDetails(date) {
  const eventsForDate = events[date] || [];
  const panel = document.getElementById('eventPanel');
  const detailsElem = document.getElementById('eventDetails');
  detailsElem.innerHTML = eventsForDate.map(event => `<h3>${event.title}</h3><p>${event.description}</p>`).join(''); // عرض تفاصيل كل حدث
  panel.style.width = '101%'; // تعيين عرض الجزء الجانبي
  panel.style.left = '0'; // تحريك الجزء الجانبي ليظهر في العرض
}

// إغلاق الجزء الجانبي
document.getElementById('closePanel').addEventListener('click', function() {
  const panel = document.getElementById('eventPanel');
  panel.style.left = '-100%'; // تحريك الجزء الجانبي ليختفي من العرض
  panel.style.width = '0'; // إعادة تعيين عرض الجزء الجانبي
});

// إرفاق مستمعين للأحداث بالأزرار للتنقل بين الشهور
document.getElementById('prevMonth').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentYear, currentMonth);
});

document.getElementById('nextMonth').addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentYear, currentMonth);
});

// توليد التقويم الأولي
generateCalendar(currentYear, currentMonth);