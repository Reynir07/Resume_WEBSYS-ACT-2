document.getElementById('cta-button').addEventListener('click', function() {
        document.querySelector('#hobbies').scrollIntoView({
            behavior: 'smooth'
        });
    });


    const hobbies = [
        {
            title: "HTML",
            image: "html.svg",
        },
        {
            title: "CSS",
            image: "css.svg",
        },
        {
            title: "JavaScript",
            image: "javascript.svg",
        },
        {
            title: "C#",
            image: "csharp.svg",
        },
    ];


    const Education = [
                {
            title: "Global Reciprocal College",
            date: "Current",
        },
        {
            title: "Macario B. Asistio Senior High School",
            date: "S.Y 2020-2022",
        },
        {
            title: "Imelda Integrated Secondary School",
            date: "S.Y 2016-2019",
        }
    ];


    const hobbiesGrid = document.querySelector('.hobbies-grid');
    hobbies.forEach(hobby => {
        const hobbyCard = document.createElement('div');
        hobbyCard.className = 'hobby-card';
        hobbyCard.innerHTML = `
            <img src="${hobby.image}" alt="${hobby.title}" style="max-width: 150px; height:auto; display: block; margin: 0 auto;"> 
            <div class="hobby-info">
                <h3>${hobby.title}</h3>
            </div>
        `;
        hobbiesGrid.appendChild(hobbyCard);
    });

    const EducationList = document.querySelector('.Education-list');
    Education.forEach(Education => {
        const EducationItem = document.createElement('div');
        EducationItem.className = 'Education-item';
        EducationItem.innerHTML = `
            <h3>${Education.title}</h3>
            <p class="date">${Education.date}</p>
        `;
        EducationList.appendChild(EducationItem);
    });