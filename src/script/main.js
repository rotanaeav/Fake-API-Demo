    async function loadPopularCourses() {
            try {
                const response = await fetch('https://68ae84b2b91dfcdd62b9604a.mockapi.io/api/v1/course');
                const courses = await response.json();
                const popularCourses = courses.slice(0, 4);
                
                const coursesContainer = document.getElementById('popular-courses');
                coursesContainer.innerHTML = '';
                
                popularCourses.forEach(course => {
                    const courseCard = `
                        <a href="./pages/detail.html?id=${course.id}" class="hover:scale-103 transition-transform duration-200 group">
                            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow  p-2">
                                <img
                                    src="${course.image}"
                                    alt="${course.title}"
                                    class="w-full h-48 object-contain"
                                />
                                <div class="p-4">
                                    <h3 class="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700">
                                        ${course.title}
                                    </h3>
                                    <p class="text-red-600 font-medium mb-3">${course.scholarship}</p>
                                    <p class="text-gray-700 font-medium mb-4 line-clamp-2">
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
                        </a>
                    `;
                    coursesContainer.innerHTML += courseCard;
                });
            } catch (error) {
                console.error('Error loading courses:', error);
                document.getElementById('popular-courses').innerHTML = '<p class="text-center text-gray-500 col-span-full">Failed to load courses</p>';
            }
        }


        document.addEventListener('DOMContentLoaded', loadPopularCourses);