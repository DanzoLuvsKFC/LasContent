window.onload = () => {
    const footer = document.createElement('footer');
    footer.classList.add('custom-footer');
    footer.style.textAlign = "center";
    footer.style.padding = "20px";
    footer.style.backgroundColor = "#022ddc";
    footer.style.color = "aliceblue";

    // Paragraph 1
    const contactInfo1 = document.createElement('p');
    contactInfo1.innerText = "Let's LasCollaborate together!";
    contactInfo1.classList.add('contact-info-1');  // Custom class
    footer.appendChild(contactInfo1);

    // Paragraph 2
    const contactInfo2 = document.createElement('p');
    contactInfo2.innerText = "Contact me: @daniellasco4@gmail.com";
    contactInfo2.classList.add('contact-info-2');  // Custom class
    footer.appendChild(contactInfo2);

    // Paragraph 3
    const contactInfo3 = document.createElement('p');
    contactInfo3.innerText = "© 2024 | Designed by lasco. All Rights Reserved.";
    contactInfo3.classList.add('contact-info-3');  // Custom class
    footer.appendChild(contactInfo3);

    // Social Media Links
    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.style.marginTop = "10px";
    const socialMedias = [
        { 
            link: "https://github.com/DanzoLuvsKFC", 
            imgSrc: "https://danzoluvskfc.github.io/LasContent/images/github.png",  
            altText: "Github"
        },
        { 
            link: "https://www.linkedin.com/in/mark-daniel-lasco-7ab7ab309/", 
            imgSrc: "https://danzoluvskfc.github.io/LasContent/images/linkedin.png",  
            altText: "LinkedIn"
        }
        
        
    ];

    socialMedias.forEach(media => {
        const anchor = document.createElement('a');
        anchor.href = media.link;
        anchor.target = "_blank";

        const image = document.createElement('img');
        image.src = media.imgSrc;  
        image.alt = media.altText;
        image.style.width = "30px";
        image.style.margin = "0 10px";

        anchor.appendChild(image);
        socialMediaDiv.appendChild(anchor);
    });

    footer.appendChild(socialMediaDiv);
    document.body.appendChild(footer);
};
