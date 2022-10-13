//LAYOUT SECTION

    // Global functions

    function pickUrValue(obj, num, value) {
            
        for ( let i = 0; i < obj.length; i++ ) {
            let objVal = obj[num][value];
            return objVal;
        }
    }

    // Global vars

        const main = document.querySelector('main');
        const aside = document.createElement('ASIDE');

    //Social Stats

        //local variables
        const getSecSocial = document.createElement('SECTION');

        function socialStats() {
            const socialStatsData = [
                { name: 'Facebook',
                numbers: '10,320',
                image: `<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
                        </svg>`
                },
                { name: 'Instagram',
                numbers: '16,445',
                image:  `<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"/>
                        </svg>`

                },
                { name: 'Twitter',
                numbers: '22,189',
                image: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                        </svg>`  
                }
            ];

            function socStatsCards(num) {
                let times = ``;
                for ( let i = 0; i < num; i++ ) {
                    times += `<div class="flexing-socials">
                    <div class="flexing-socials-rightSpace">
                        <h3 class="flexing-socials-title">${pickUrValue(socialStatsData, [i], 'name')}</h3>
                        <h3 class="flexing-socials-numbers">${pickUrValue(socialStatsData, [i], 'numbers')}</h3>
                    </div>
                    <div class="svg-social-icons">
                        ${pickUrValue(socialStatsData, [i], 'image')}
                    </div>
                </div>`;
                }
                return times;
            }
            getSecSocial.classList.add('social-stats');
            getSecSocial.innerHTML = `<h2>Social Stats</h2>`;
            getSecSocial.insertAdjacentHTML('beforeEnd', socStatsCards(3));
            main.appendChild(getSecSocial);
        }

    //New Members

        //local variables
        const sectMemb = document.createElement('SECTION');
        const pplData = [
            {
                name: 'Victoria Chambers',
                email: 'victoria.chambers80@example.com',
                bdate: '10/15/20',
                image: 'images/member-1.jpg'
                
            },
            {
                name: 'Dale Byrd',
                email: 'dale.byrd52@example.com',
                bdate: '10/15/20',
                image: 'images/member-2.jpg'
            },
            {
                name: 'Dawn Good',
                email: 'dawn.wood16@example.com',
                bdate: '10/15/20',
                image: 'images/member-3.jpg'
            },
            {
                name: 'Dan Oliver',
                email: 'dan.oliver82@example.com',
                bdate: '10/15/20',
                image: 'images/member-4.jpg'
            }
        ]

        function newMembers() {

            function newMembCards(num) {
                let times = ``;
                for ( let i = 0; i < num; i++ ) {
                    times += `
                                <div class="flexing-members">                        
                                    <div>
                                        <img src="${pickUrValue(pplData, [i], 'image')}" class="new-members-images" alt="image of ${pickUrValue(pplData, [i], 'name')}">
                                    </div>
                                    <div class="aside-text">
                                        <p>${pickUrValue(pplData, [i], 'name')}</p>
                                        <a href="${pickUrValue(pplData, [i], 'email')}"><address>${pickUrValue(pplData, [i], 'email')}</address></a>
                                    </div>
                                    <p>${pickUrValue(pplData, [i], 'bdate')}</p>
                                </div>
                    `;
                }
                return times;
            }
            sectMemb.classList.add('new-members')
            sectMemb.innerHTML = '<h2>New Members</h2>'
            aside.insertAdjacentElement('beforeEnd', sectMemb)
            sectMemb.insertAdjacentHTML('beforeEnd', newMembCards(4)) 

        }

    //Recent Members

        //local variables
        const sectRec = document.createElement('SECTION');

        function recentMembers() {
            const recentMembData = [
                {
                    activity: "commented on <strong>WebApp's SEO Tips</strong>",
                    time: '4 hours ago'
                },
                {
                    activity: "liked the post <strong>Facebook's Changes for 2021</strong>",
                    time: '5 hours ago'
                },
                {
                    activity: "commented on <strong>Facebook's Changes for 2021",
                    time: '5 hours ago'
                },
                {
                    activity: "posted <strong>WebApp's SEO Tips</strong>",
                    time: '1 day ago'
                }
            ]
            //id="no-border"
            function recMemCards(num) {
                let times = ``;
                for ( let i = 0; i < num; i++ ) {
                    times += `
                            <div class="flexing-members" >
                                <img src="${pickUrValue(pplData, [i], 'image')}" class="new-members-images">
                                <div class="recent-activity-margin">
                                    <p>${pickUrValue(pplData, [i], 'name')} ${pickUrValue(recentMembData, [i], 'activity')}</p>
                                    <p>${pickUrValue(recentMembData, [i], 'time')}</p>
                                </div>
                                <p><span>></span></p>
                            </div>
                    `;
                }
                return times;
            }

            sectRec.classList.add('new-members')
            sectRec.innerHTML = '<h2>Recent Activity</h2>'
            aside.insertAdjacentElement('beforeEnd', sectRec)
            sectRec.insertAdjacentHTML('beforeEnd', recMemCards(4)) 

        } 


        function buttonMessage() {
            const button = messageForm.querySelector('button');
            const searchCheck = messageForm.querySelector('.message-search');
            const txtAreaCheck = messageForm.querySelector('.textarea');
            const alertMessageDiv = document.createElement('div');
            // alertMessageDiv.innerHTML = `<p>LOL</p>`;
            button.insertAdjacentElement('beforebegin', alertMessageDiv);

            // making this event so it wont reload page
            button.addEventListener('click', (e) => {
                e.preventDefault()
            })
            // button.disabled = 'true';
            button.addEventListener('mousedown', () => {
                for ( i = 0; i < pplData.length; i++ ) {
                    if (searchCheck.value.includes(pickUrValue(pplData, [i], 'name')) && !!txtAreaCheck.value && txtAreaCheck.value.length === txtAreaCheck.value.trim().length) {
                        
                        alertMessageDiv.innerHTML = `<p>Message Sent! you'll receive a copy on your inbox</p>`
                        break
                    } else {
                        alertMessageDiv.innerHTML = `<p>ERROR<br><span>Click here</span> to get more details</p>`
                    }   
                }
            })            
        }


//CALLING ALL LAYOUT FUNCS

    window.addEventListener('load', () => {
        socialStats();
        // Getting Aside created
            aside.classList.add('members');
            aside.setAttribute('id', 'ppl')
            main.insertAdjacentElement('afterend', aside)
        newMembers(); 
        recentMembers();   
        //taking borderoff first image on each aside sections
            const noBorderMemb = aside.querySelectorAll('.new-members > .flexing-members');
            noBorderMemb[0].setAttribute('id', 'no-border');
            noBorderMemb[4].setAttribute('id', 'no-border');
    });