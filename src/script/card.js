const courseCard = document.getElementById('cardobj');
async function getCourses() {
    const res = await  fetch('https://68ae84b2b91dfcdd62b9604a.mockapi.io/api/v1/course')
  const data = await res.json();
  let card = "";
  data.map((course) => {
    card += `   <a href="./detail.html?id=${course.id}" class="hover:scale-103 transition-transform duration-200 group">
                            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow pt-6">
                                <img
                                    src="${course.image}"
                                    alt="${course.title}"
                                    class="w-full h-28 object-contain px-12"
                                />
                                <div class="bg-blue-50 mt-6">
                                <div class="px-6 py-4">
                                    <h3 class="text-lg font-semibold text-blue-900 mb-1 group-hover:text-blue-700 line-clamp-1">
                                        ${course.title}
                                    </h3>
                                    <p class="text-red-600 font-medium mb-1">${course.scholarship}</p>
                                    <p class="text-gray-600 font-normal mb-4 line-clamp-2">
                                        ${course.description}
                                    </p>
                                    <div class="flex justify-between text-sm">
                                        <span class="font-semibold text-green-700">${course.level}</span>
                                        <span class="text-blue-700 font-bold flex items-center">
                                            <span class="mr-1">🕐</span> ${course.hours} hours
                                        </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </a>
          `;

    courseCard.innerHTML = card;
  });
}
getCourses();

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

