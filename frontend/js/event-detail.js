// Event Detail Page - Loads event data based on URL parameter

// Event data
const eventsData = {
    1: {
        title: "Guardians of Health: SRHR Initiative",
        subtitle: "Sexual Reproductive Health Rights Program",
        description: "The Guardians of Health: SRHR Initiative is a comprehensive Sexual Reproductive Health Rights program conducted in collaboration with Y-Peer Nepal & M4M. This initiative focuses on empowering youth in Kathmandu communities through health awareness, education, and advocacy. The program addresses critical issues related to sexual and reproductive health, providing young people with accurate information, resources, and support to make informed decisions about their health and well-being.",
        date: "February 2026",
        time: "10:00 AM - 4:00 PM",
        location: "Kathmandu, Nepal",
        status: "Upcoming",
        category: "Health & Wellness",
        icon: "bi-heart-pulse-fill",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        objectives: [
            "Increase awareness about sexual and reproductive health rights among youth",
            "Provide accurate information and resources on SRHR topics",
            "Create a safe space for discussions and questions",
            "Empower young people to make informed health decisions",
            "Build partnerships with health organizations and experts"
        ],
        details: [
            "Interactive workshops and sessions led by health experts",
            "Q&A sessions with healthcare professionals",
            "Distribution of educational materials and resources",
            "Networking opportunities with peers and mentors",
            "Follow-up support and resources"
        ],
        contact: "For registration and inquiries, please contact us through our Facebook page or membership portal."
    },
    2: {
        title: "District Induction & Leadership Training",
        subtitle: "Comprehensive Leadership Development Program",
        description: "The District Induction & Leadership Training is a comprehensive program designed for both new and existing members of the Leo Club. This intensive training focuses on developing essential leadership skills, organizational capabilities, and community service expertise. Participants will learn about club operations, project management, team building, and effective communication strategies that are crucial for making a positive impact in the community.",
        date: "March 2026",
        time: "9:00 AM - 5:00 PM",
        location: "Kathmandu, Nepal",
        status: "Upcoming",
        category: "Leadership Development",
        icon: "bi-people-fill",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        objectives: [
            "Introduce new members to Leo Club values and operations",
            "Develop leadership and organizational skills",
            "Enhance project planning and execution capabilities",
            "Foster teamwork and collaboration",
            "Prepare members for leadership roles"
        ],
        details: [
            "Comprehensive orientation for new members",
            "Leadership workshops and interactive sessions",
            "Team-building activities and exercises",
            "Project management training",
            "Networking with experienced members and district leaders"
        ],
        contact: "All members are encouraged to attend. Contact your club secretary for registration details."
    },
    3: {
        title: "First Aid Training Program",
        subtitle: "Essential Life-Saving Skills Workshop",
        description: "The First Aid Training Program is a collaborative event organized with other Leo Clubs in the district. This hands-on training equips participants with essential life-saving skills and first aid knowledge. The program covers basic first aid techniques, CPR, emergency response procedures, and how to handle various medical emergencies. This training is invaluable for community service activities and personal preparedness.",
        date: "April 2026",
        time: "8:00 AM - 6:00 PM",
        location: "Kathmandu, Nepal",
        status: "Upcoming",
        category: "Health & Safety",
        icon: "bi-shield-check-fill",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        objectives: [
            "Teach essential first aid skills and techniques",
            "Provide CPR and emergency response training",
            "Prepare members for community service activities",
            "Build confidence in handling medical emergencies",
            "Create a network of trained first responders"
        ],
        details: [
            "Certified first aid training by medical professionals",
            "Hands-on practice with mannequins and equipment",
            "CPR certification opportunity",
            "Emergency scenario simulations",
            "Training materials and certification provided"
        ],
        contact: "Limited seats available. Register early through your club representative."
    },
    4: {
        title: "Human Rights Day: Documentary Screening",
        subtitle: "Promoting Awareness and Inclusivity",
        description: "In celebration of Human Rights Day, the Leo Club organized a special documentary screening focused on LGBTQ+ culture and rights. This event aimed to promote awareness, understanding, and inclusivity within the community. The screening was followed by a discussion session where participants could share their thoughts, ask questions, and learn more about creating inclusive spaces for everyone.",
        date: "December 10, 2024",
        time: "2:00 PM - 5:00 PM",
        location: "Kathmandu, Nepal",
        status: "Past Event",
        category: "Awareness & Advocacy",
        icon: "bi-film",
        gradient: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
        objectives: [
            "Raise awareness about LGBTQ+ rights and issues",
            "Promote inclusivity and acceptance",
            "Educate community members about diversity",
            "Create safe spaces for discussion",
            "Advocate for human rights for all"
        ],
        details: [
            "Documentary screening on LGBTQ+ culture",
            "Panel discussion with guest speakers",
            "Q&A session with experts",
            "Networking and community building",
            "Resource distribution"
        ],
        contact: "This event has concluded. Stay tuned for future awareness programs."
    },
    5: {
        title: "Youth Leadership Award 2024",
        subtitle: "Recognizing Outstanding Leadership",
        description: "The Youth Leadership Award 2024 was a special recognition program honoring outstanding members of the Leo Club for their exceptional leadership and community service contributions. This prestigious event celebrated the achievements of young leaders who have made significant positive impacts in their communities through their dedication, innovation, and commitment to service.",
        date: "November 2024",
        time: "6:00 PM - 9:00 PM",
        location: "Kathmandu, Nepal",
        status: "Past Event",
        category: "Recognition & Awards",
        icon: "bi-trophy-fill",
        gradient: "linear-gradient(135deg, #ffe6e6 0%, #ffd6d6 100%)",
        objectives: [
            "Recognize outstanding leadership achievements",
            "Celebrate community service contributions",
            "Inspire other members to excel",
            "Highlight best practices and success stories",
            "Strengthen the Leo Club community"
        ],
        details: [
            "Award ceremony with distinguished guests",
            "Recognition of multiple award categories",
            "Keynote speeches from leaders",
            "Networking dinner",
            "Photo opportunities and media coverage"
        ],
        contact: "Congratulations to all award recipients! Nominations for 2025 will open soon."
    },
    6: {
        title: "Dashain Cultural Celebration",
        subtitle: "Celebrating Nepali Traditions",
        description: "The Dashain Cultural Celebration is an annual event that brings Leo Club members together to celebrate Nepali traditions and strengthen community bonds. This festive gathering includes traditional music, dance performances, cultural activities, and delicious Nepali cuisine. It's a time for members to connect, share traditions, and build lasting friendships while honoring the rich cultural heritage of Nepal.",
        date: "October 2024",
        time: "4:00 PM - 9:00 PM",
        location: "Kathmandu, Nepal",
        status: "Past Event",
        category: "Cultural Celebration",
        icon: "bi-calendar-event-fill",
        gradient: "linear-gradient(135deg, #fff2d6 0%, #ffe7b3 100%)",
        objectives: [
            "Celebrate Nepali cultural heritage",
            "Strengthen bonds among club members",
            "Promote cultural understanding",
            "Create memorable experiences",
            "Foster community spirit"
        ],
        details: [
            "Traditional music and dance performances",
            "Cultural activities and games",
            "Traditional Nepali food and refreshments",
            "Tika ceremony and blessings",
            "Photo sessions and memories"
        ],
        contact: "Thank you to everyone who participated! See you next year for Dashain 2025."
    }
};

// Load event data based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id')) || 1;
    
    const event = eventsData[eventId];
    
    if (!event) {
        // Event not found, redirect to events page
        window.location.href = 'events.html';
        return;
    }
    
    // Update page title
    document.title = `${event.title} - Leo Club of Kathmandu Alka`;
    
    // Update hero section
    const eventHero = document.getElementById('eventHero');
    eventHero.style.background = event.gradient;
    
    // Add stronger overlay for light backgrounds (past events with light colors)
    if (event.status === 'Past Event' || eventId === 4 || eventId === 5 || eventId === 6) {
        eventHero.classList.add('light-background');
    }
    
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventSubtitle').textContent = event.subtitle;
    
    // Update event image
    const eventImage = document.getElementById('eventImage');
    if (eventId === 1) {
        // Use image for Guardians of Health: SRHR Initiative
        eventImage.style.background = 'none';
        eventImage.style.display = 'block';
        eventImage.style.alignItems = 'unset';
        eventImage.style.justifyContent = 'unset';
        eventImage.innerHTML = `<img src="images/guardians-events.jpg" alt="${event.title}" class="detail-image">`;
    } else if (eventId === 2) {
        // Use image for District Induction & Leadership Training
        eventImage.style.background = 'none';
        eventImage.style.display = 'block';
        eventImage.style.alignItems = 'unset';
        eventImage.style.justifyContent = 'unset';
        eventImage.innerHTML = `<img src="images/induction-event.jpg" alt="${event.title}" class="detail-image">`;
    } else if (eventId === 3) {
        // Use image for First Aid Training Program
        eventImage.style.background = 'none';
        eventImage.style.display = 'block';
        eventImage.style.alignItems = 'unset';
        eventImage.style.justifyContent = 'unset';
        eventImage.innerHTML = `<img src="images/first-aid-event.jpg" alt="${event.title}" class="detail-image">`;
    } else if (eventId === 4) {
        // Use image for Human Rights Day: Documentary Screening
        eventImage.style.background = 'none';
        eventImage.style.display = 'block';
        eventImage.style.alignItems = 'unset';
        eventImage.style.justifyContent = 'unset';
        eventImage.innerHTML = `<img src="images/human.png" alt="${event.title}" class="detail-image">`;
    } else if (eventId === 5) {
        // Use image for Youth Leadership Award 2024
        eventImage.style.background = 'none';
        eventImage.style.display = 'block';
        eventImage.style.alignItems = 'unset';
        eventImage.style.justifyContent = 'unset';
        eventImage.innerHTML = `<img src="images/hero3.jpg" alt="${event.title}" class="detail-image">`;
    } else if (eventId === 6) {
        // Use image for Dashain Cultural Celebration
        eventImage.style.background = 'none';
        eventImage.style.display = 'block';
        eventImage.style.alignItems = 'unset';
        eventImage.style.justifyContent = 'unset';
        eventImage.innerHTML = `<img src="images/dashain.jpg" alt="${event.title}" class="detail-image">`;
    } else {
        eventImage.style.background = event.gradient;
        eventImage.style.display = 'flex';
        eventImage.style.alignItems = 'center';
        eventImage.style.justifyContent = 'center';
        eventImage.innerHTML = `<i class="bi ${event.icon} text-white" style="font-size: 80px;"></i>`;
    }
    
    // Update description
    document.getElementById('eventDescription').textContent = event.description;
    
    // Update sidebar information
    document.getElementById('eventDate').textContent = event.date;
    document.getElementById('eventTime').textContent = event.time;
    document.getElementById('eventLocation').textContent = event.location;
    document.getElementById('eventCategory').textContent = event.category;
    
    // Update status badge
    const statusBadge = event.status === 'Upcoming' 
        ? '<span class="badge bg-primary">Upcoming</span>'
        : '<span class="badge bg-success">Past Event</span>';
    document.getElementById('eventStatus').innerHTML = statusBadge;
    
    // Update details
    const detailsHtml = event.details.map(detail => 
        `<div class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>${detail}</div>`
    ).join('');
    document.getElementById('eventDetails').innerHTML = detailsHtml;
    
    // Update objectives
    const objectivesHtml = event.objectives.map(objective => 
        `<li class="mb-3"><i class="bi bi-arrow-right-circle-fill text-primary me-2"></i>${objective}</li>`
    ).join('');
    document.getElementById('eventObjectives').innerHTML = objectivesHtml;
    
    // Update contact information
    document.getElementById('eventContact').innerHTML = `<p>${event.contact}</p>`;
});
