async function loadCourseDetail() {
  // Get ?id= from URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const res = await fetch("../data/courses.json"); // path relative to /pages
  const courses = await res.json();

  const course = courses.find(c => c.id == id);
  const container = document.getElementById("course-detail");

  if (!course) {
    container.innerHTML = "<p class='text-red-600'>Course not found.</p>";
    return;
  }

  container.innerHTML = `
    <img src="${course.image}" alt="${course.title}" class="w-full h-64 object-contain mb-4">
    <h2 class="text-2xl font-bold text-blue-900 mb-2">${course.title}</h2>
    <p class="text-gray-700 mb-4">${course.description}</p>

    <p class="text-red-600 font-medium mb-2">${course.scholarship}</p>

    <div class="flex justify-between text-sm text-gray-600 mb-4">
      <span class="font-semibold text-green-700">${course.level}</span>
      <span class="text-blue-700 font-bold">🕐 ${course.hours} hours</span>
    </div>

    <a href="course.html" class="text-blue-500 hover:underline">← Back to courses</a>
  `;
}

loadCourseDetail();
