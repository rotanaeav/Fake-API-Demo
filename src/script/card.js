const courseCard = document.getElementById('cardobj');
async function getCourses() {
    const res = await  fetch('../data/courses.json')
    const data = await res.json();
let card = '';
    data.map(course => {
        card +=
        `<a href="detail.html?id=${course.id}" class="hover:scale-103 transition-transform duration-200">
          <div class="bg-white rounded-lg shadow-md overflow-hidden p-4">
        <img
            src="${course.image}"
            alt="Course Image"
            class=" h-48 mb-4 mx-auto"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-blue-900 mb-2">
                ${course.title}
            </h3>
            <p class="text-red-600 font-medium mb-3">${course.scholarship}</p>
            <p class="text-black font-medium mb-4 line-clamp-1">${course.description}</p>
            <div class="flex justify-between text-sm text-gray-600">
              <span class="font-semibold text-green-700">${course.level}</span>
              <span class="text-blue-700 font-bold mr-1"> <span class="mx-1"> 🕐 </span> ${course.hours} hours</span>
            </div>
          </div>
          </div> </a>
          `;
          
        courseCard.innerHTML = card;
   });

}
getCourses();
