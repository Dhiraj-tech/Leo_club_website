// Project Detail Page - Loads project data based on URL parameter

// Project data
const projectsData = {
    1: {
        title: "Guardians of Health: SRHR Initiative",
        subtitle: "Sexual Reproductive Health Rights Program",
        description: "The Guardians of Health: SRHR Initiative was a comprehensive program focused on sexual and reproductive health rights for youth in Kathmandu communities. In collaboration with Y-Peer Nepal & M4M, this project provided essential health education, awareness campaigns, and support services. The initiative addressed critical gaps in youth health services and empowered young people with knowledge and resources to make informed decisions about their reproductive health.",
        duration: "2024 - 2025",
        location: "Kathmandu, Nepal",
        status: "Completed",
        category: "Health",
        icon: "bi-heart-pulse",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        impact: [
            { label: "Youth Reached", value: "500+" },
            { label: "Workshops", value: "25+" },
            { label: "Communities", value: "10+" }
        ],
        objectives: [
            "Increase awareness about sexual and reproductive health rights",
            "Provide accessible health information and resources",
            "Reduce stigma around SRHR topics",
            "Empower youth to make informed health decisions",
            "Build partnerships with health organizations"
        ],
        activities: [
            "Regular health awareness workshops in schools and communities",
            "Distribution of educational materials and resources",
            "One-on-one counseling sessions",
            "Health camps and screening programs",
            "Advocacy campaigns for youth health rights",
            "Training of peer educators"
        ],
        partners: "Y-Peer Nepal, M4M, Local Health Organizations, Educational Institutions"
    },
    2: {
        title: "Elder Care & Support Program",
        subtitle: "Supporting Elderly Community Members",
        description: "The Elder Care & Support Program is a dedicated initiative focused on improving the quality of life for elderly community members in Kathmandu. Through regular visits, health check-ups, social engagement activities, and essential support services, this program addresses the needs of senior citizens who may be isolated or in need of assistance. The program fosters intergenerational connections and ensures that our elders feel valued and cared for.",
        duration: "2024 - 2025",
        location: "Kathmandu, Nepal",
        status: "Completed",
        category: "Social Welfare",
        icon: "bi-people-fill",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        impact: [
            { label: "Elders Served", value: "200+" },
            { label: "Visits", value: "500+" },
            { label: "Health Checks", value: "150+" }
        ],
        objectives: [
            "Provide regular companionship and social interaction",
            "Conduct health check-ups and medical referrals",
            "Distribute essential supplies and medicines",
            "Organize recreational and social activities",
            "Create support networks for elderly community members"
        ],
        activities: [
            "Weekly home visits to elderly community members",
            "Health screening and check-up camps",
            "Social gatherings and cultural activities",
            "Distribution of essential supplies",
            "Intergenerational programs with youth",
            "Emergency support and assistance"
        ],
        partners: "Local Health Centers, Community Organizations, Volunteer Groups"
    },
    3: {
        title: "Education & Literacy Program",
        subtitle: "Empowering Through Education",
        description: "The Education & Literacy Program provided comprehensive educational support to underprivileged students and differently-abled individuals in Kathmandu. This initiative included literacy programs, scholarship distribution, mentorship, and educational resource provision. The program aimed to break barriers to education and create opportunities for all children and youth to access quality learning experiences regardless of their background or abilities.",
        duration: "2024",
        location: "Kathmandu, Nepal",
        status: "Completed",
        category: "Education",
        icon: "bi-book-fill",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        impact: [
            { label: "Students Helped", value: "300+" },
            { label: "Scholarships", value: "50+" },
            { label: "Schools", value: "15+" }
        ],
        objectives: [
            "Improve literacy rates among underprivileged communities",
            "Provide scholarships to deserving students",
            "Offer mentorship and academic support",
            "Support differently-abled students",
            "Distribute educational materials and resources"
        ],
        activities: [
            "After-school tutoring and support programs",
            "Scholarship distribution ceremonies",
            "Educational material distribution",
            "Mentorship matching programs",
            "Special education support for differently-abled students",
            "Library and reading programs"
        ],
        partners: "Local Schools, Educational NGOs, Corporate Sponsors, Individual Donors"
    },
    4: {
        title: "Disaster Relief & Emergency Response",
        subtitle: "Rapid Response to Community Needs",
        description: "The Disaster Relief & Emergency Response initiative provides rapid assistance to communities affected by natural disasters and emergencies. This project focuses on immediate relief efforts including food distribution, essential supplies, temporary shelter, and medical aid. The program has been activated during various emergencies, demonstrating the Leo Club's commitment to being there for communities in their time of need.",
        duration: "2024 (Completed)",
        location: "Various locations in Nepal",
        status: "Completed",
        category: "Disaster Relief",
        icon: "bi-shield-fill",
        gradient: "linear-gradient(135deg, #ffc107 0%, #ff9800 100%)",
        impact: [
            { label: "Families Helped", value: "500+" },
            { label: "Relief Packages", value: "1000+" },
            { label: "Emergency Responses", value: "10+" }
        ],
        objectives: [
            "Provide immediate relief to disaster-affected communities",
            "Distribute essential supplies and food",
            "Offer medical assistance and support",
            "Coordinate with relief organizations",
            "Rebuild and recovery support"
        ],
        activities: [
            "Emergency food and water distribution",
            "Essential supply distribution (blankets, clothing, hygiene kits)",
            "Medical camps and health services",
            "Temporary shelter coordination",
            "Fundraising for relief efforts",
            "Coordination with government and NGOs"
        ],
        partners: "Government Agencies, Red Cross, Local NGOs, Community Organizations"
    },
    5: {
        title: "Children Support & Development",
        subtitle: "Nurturing the Future Generation",
        description: "The Children Support & Development program focused on the welfare and development of underprivileged children in Kathmandu. Through educational support, health camps, recreational activities, and development initiatives, this program ensured that children had access to opportunities for growth and learning. The program created safe spaces for children to learn, play, and develop essential life skills.",
        duration: "2024 - 2025",
        location: "Kathmandu, Nepal",
        status: "Completed",
        category: "Children",
        icon: "bi-heart-fill",
        gradient: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
        impact: [
            { label: "Children Served", value: "400+" },
            { label: "Health Camps", value: "20+" },
            { label: "Activities", value: "50+" }
        ],
        objectives: [
            "Provide educational support and resources",
            "Organize health camps and medical check-ups",
            "Create recreational and learning opportunities",
            "Support children's emotional and social development",
            "Build safe and nurturing environments"
        ],
        activities: [
            "Educational support programs and tutoring",
            "Regular health camps and check-ups",
            "Recreational activities and sports programs",
            "Art and creative workshops",
            "Nutrition programs and meal distribution",
            "Life skills training and mentorship"
        ],
        partners: "Children's Organizations, Schools, Health Centers, Community Centers"
    },
    6: {
        title: "Environmental Conservation Initiative",
        subtitle: "Protecting Our Planet",
        description: "The Environmental Conservation Initiative was a project focused on promoting environmental sustainability in Kathmandu. Through tree plantation drives, community clean-up campaigns, and awareness programs, this initiative engaged community members in protecting and preserving the environment. The program educated people about environmental issues and encouraged sustainable practices in daily life.",
        duration: "2024",
        location: "Kathmandu, Nepal",
        status: "Completed",
        category: "Environment",
        icon: "bi-tree-fill",
        gradient: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
        impact: [
            { label: "Trees Planted", value: "2000+" },
            { label: "Clean-up Drives", value: "30+" },
            { label: "Participants", value: "800+" }
        ],
        objectives: [
            "Increase green cover through tree plantation",
            "Promote waste reduction and recycling",
            "Raise environmental awareness",
            "Organize community clean-up campaigns",
            "Encourage sustainable living practices"
        ],
        activities: [
            "Seasonal tree plantation drives",
            "Community clean-up campaigns",
            "Recycling and waste management programs",
            "Environmental awareness workshops",
            "School environmental education programs",
            "Green space development projects"
        ],
        partners: "Environmental NGOs, Government Agencies, Schools, Community Groups"
    },
    7: {
        title: "Arohan 1.0: Mentorship Program",
        subtitle: "Two-Month Mentorship Initiative",
        description: "Arohan 1.0 was a comprehensive two-month mentorship program designed to empower youth through structured guidance, skill development, and personal growth. This signature project featured five engaging sessions including orientation, skill-building workshops, and design thinking sessions. Sponsored by Kayo Studio, the program connected mentees with experienced mentors who provided valuable insights into career development, leadership, and community engagement. The initiative created lasting relationships and equipped participants with essential skills for their personal and professional journeys.",
        duration: "L.Y. 2024/25",
        location: "Kathmandu, Nepal",
        status: "Completed",
        category: "Mentorship",
        icon: "bi-people-fill",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        impact: [
            { label: "Mentees", value: "50+" },
            { label: "Sessions", value: "5" },
            { label: "Mentors", value: "15+" }
        ],
        objectives: [
            "Provide structured mentorship opportunities for youth",
            "Develop essential life and professional skills",
            "Foster leadership and personal growth",
            "Create meaningful mentor-mentee relationships",
            "Equip participants with design thinking capabilities"
        ],
        activities: [
            "Orientation session introducing mentors and program structure",
            "Skill-building workshops on communication and leadership",
            "Design thinking workshops and problem-solving sessions",
            "One-on-one mentorship meetings",
            "Networking events and community building",
            "Graduation ceremony and certificate distribution"
        ],
        partners: "Kayo Studio, Experienced Professionals, Community Leaders"
    },
    8: {
        title: "16 Days of Activism",
        subtitle: "Comprehensive Awareness Campaign",
        description: "The 16 Days of Activism was an impactful multi-day campaign that addressed critical social issues through awareness, advocacy, and community engagement. This comprehensive initiative covered World AIDS Day, Human Rights Day, International Day of Persons with Disabilities, and Leo Day. Through various activities including awareness sessions, community outreach, social media campaigns, and interactive workshops, the program promoted understanding, inclusivity, and social justice. The campaign successfully engaged community members and raised awareness about important social issues affecting our society.",
        duration: "December 2024",
        location: "Kathmandu, Nepal",
        status: "Completed",
        category: "Awareness Campaign",
        icon: "bi-ribbon-fill",
        gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        impact: [
            { label: "Days", value: "16" },
            { label: "Events", value: "4" },
            { label: "People Reached", value: "2000+" }
        ],
        objectives: [
            "Raise awareness about HIV/AIDS prevention and support",
            "Promote human rights and social justice",
            "Advocate for disability rights and inclusion",
            "Celebrate Leo Day and community service",
            "Engage community members in important social issues"
        ],
        activities: [
            "World AIDS Day awareness sessions and testing camps",
            "Human Rights Day documentary screening and discussions",
            "Disability Day inclusive activities and awareness programs",
            "Leo Day celebration and community service activities",
            "Social media campaigns and online engagement",
            "Community outreach and resource distribution"
        ],
        partners: "Health Organizations, Human Rights Groups, Disability Rights Organizations, Community Partners"
    },
    9: {
        title: "Blood Donation Drives",
        subtitle: "Regular Community Health Initiative",
        description: "The Blood Donation Drives program is a regular initiative organized in collaboration with health organizations to support the community's healthcare needs. These organized blood donation camps provide a crucial service by collecting blood donations from volunteers to help patients in need. The program raises awareness about the importance of blood donation, encourages regular donors, and ensures a steady supply of blood for medical emergencies and treatments. Through these drives, the Leo Club contributes significantly to the healthcare system and saves lives.",
        duration: "2024 - 2025",
        location: "Kathmandu, Nepal",
        status: "Completed",
        category: "Health",
        icon: "bi-droplet-fill",
        gradient: "linear-gradient(135deg, #cb2d3e 0%, #ef473a 100%)",
        impact: [
            { label: "Donors", value: "300+" },
            { label: "Drives", value: "8+" },
            { label: "Units Collected", value: "250+" }
        ],
        objectives: [
            "Collect blood donations for medical emergencies",
            "Raise awareness about the importance of blood donation",
            "Encourage regular blood donors",
            "Support healthcare facilities and patients",
            "Build a culture of voluntary blood donation"
        ],
        activities: [
            "Regular blood donation camps in various locations",
            "Pre-donation health screening and eligibility checks",
            "Awareness sessions about blood donation benefits",
            "Donor registration and follow-up programs",
            "Coordination with blood banks and hospitals",
            "Recognition and appreciation for donors"
        ],
        partners: "Red Cross Nepal, Blood Banks, Hospitals, Health Organizations"
    }
};

// Load project data based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = parseInt(urlParams.get('id')) || 1;
        
        const project = projectsData[projectId];
        
        if (!project) {
            // Project not found, redirect to projects page
            window.location.href = 'projects.html';
            return;
        }
    
    // Update page title
    document.title = `${project.title} - Leo Club of Kathmandu Alka`;
    
    // Update hero section
    const projectHero = document.getElementById('projectHero');
    projectHero.style.background = project.gradient;
    
    // Check if project should be completed based on date
    const currentYear = new Date().getFullYear();
    let actualStatus = project.status;
    const durationMatch = project.duration.match(/(\d{4})/g);
    if (durationMatch) {
        const endYear = parseInt(durationMatch[durationMatch.length - 1]);
        // If end year is before current year (2026), mark as completed
        if (endYear < currentYear) {
            actualStatus = 'Completed';
        }
    }
    
    // Add stronger overlay for light backgrounds on completed projects
    if (actualStatus === 'Completed') {
        projectHero.classList.add('light-background');
    }
    
    // Update title and subtitle
    const titleElement = document.getElementById('projectTitle');
    if (titleElement) titleElement.textContent = project.title;
    
    const subtitleElement = document.getElementById('projectSubtitle');
    if (subtitleElement) subtitleElement.textContent = project.subtitle;
    
    // Update project image
    const projectImage = document.getElementById('projectImage');
    if (projectImage) {
        if (projectId === 1) {
            // Use image for Guardians of Health 2.0: SRHR Workshop
            projectImage.style.background = 'none';
            projectImage.style.display = 'block';
            projectImage.style.alignItems = 'unset';
            projectImage.style.justifyContent = 'unset';
            projectImage.innerHTML = `<img src="images/award.jpg" alt="${project.title}" class="detail-image">`;
        } else if (projectId === 2) {
            // Use image for Elder Care & Support Program
            projectImage.style.background = 'none';
            projectImage.style.display = 'block';
            projectImage.style.alignItems = 'unset';
            projectImage.style.justifyContent = 'unset';
            projectImage.innerHTML = `<img src="images/elderly.png" alt="${project.title}" class="detail-image">`;
        } else if (projectId === 3) {
            // Use image for Education & Literacy Program
            projectImage.style.background = 'none';
            projectImage.style.display = 'block';
            projectImage.style.alignItems = 'unset';
            projectImage.style.justifyContent = 'unset';
            projectImage.innerHTML = `<img src="images/education.jpg" alt="${project.title}" class="detail-image">`;
        } else if (projectId === 4) {
            // Use image for Disaster Relief & Emergency Response
            projectImage.style.background = 'none';
            projectImage.style.display = 'block';
            projectImage.style.alignItems = 'unset';
            projectImage.style.justifyContent = 'unset';
            projectImage.innerHTML = `<img src="images/disasters.jpg" alt="${project.title}" class="detail-image">`;
        } else if (projectId === 5) {
            // Use image for Children Support & Development
            projectImage.style.background = 'none';
            projectImage.style.display = 'block';
            projectImage.style.alignItems = 'unset';
            projectImage.style.justifyContent = 'unset';
            projectImage.innerHTML = `<img src="images/children.jpg" alt="${project.title}" class="detail-image">`;
        } else if (projectId === 6) {
            // Use image for Environmental Conservation Initiative
            projectImage.style.background = 'none';
            projectImage.style.display = 'block';
            projectImage.style.alignItems = 'unset';
            projectImage.style.justifyContent = 'unset';
            projectImage.innerHTML = `<img src="images/environments.png" alt="${project.title}" class="detail-image">`;
        } else if (projectId === 7) {
            // Use image for Arohan 1.0: Mentorship Program
            projectImage.style.background = 'none';
            projectImage.style.display = 'block';
            projectImage.style.alignItems = 'unset';
            projectImage.style.justifyContent = 'unset';
            projectImage.innerHTML = `<img src="images/arohan.jpg" alt="${project.title}" class="detail-image">`;
        } else if (projectId === 8) {
            // Use image for 16 Days of Activism
            projectImage.style.background = 'none';
            projectImage.style.display = 'block';
            projectImage.style.alignItems = 'unset';
            projectImage.style.justifyContent = 'unset';
            projectImage.innerHTML = `<img src="images/16-days.png" alt="${project.title}" class="detail-image">`;
        } else if (projectId === 9) {
            // Use image for Blood Donation Drives
            projectImage.style.background = 'none';
            projectImage.style.display = 'block';
            projectImage.style.alignItems = 'unset';
            projectImage.style.justifyContent = 'unset';
            projectImage.innerHTML = `<img src="images/blood.jpg" alt="${project.title}" class="detail-image">`;
        } else {
            projectImage.style.background = project.gradient;
            projectImage.style.display = 'flex';
            projectImage.style.alignItems = 'center';
            projectImage.style.justifyContent = 'center';
            projectImage.innerHTML = `<i class="bi ${project.icon} text-white" style="font-size: 80px;"></i>`;
        }
    }
    
    // Update description
    const descriptionElement = document.getElementById('projectDescription');
    if (descriptionElement) {
        descriptionElement.textContent = project.description;
    }
    
    // Update sidebar information
    const durationElement = document.getElementById('projectDuration');
    if (durationElement) durationElement.textContent = project.duration;
    
    const locationElement = document.getElementById('projectLocation');
    if (locationElement) locationElement.textContent = project.location;
    
    const categoryElement = document.getElementById('projectCategory');
    if (categoryElement) categoryElement.textContent = project.category;
    
    // Update status badge (using actualStatus calculated above)
    const statusBadge = actualStatus === 'Ongoing' 
        ? '<span class="badge bg-success">Ongoing</span>'
        : '<span class="badge bg-secondary">Completed</span>';
    const statusElement = document.getElementById('projectStatus');
    if (statusElement) statusElement.innerHTML = statusBadge;
    
    // Update impact stats
    if (project.impact && Array.isArray(project.impact)) {
        const impactHtml = project.impact.map(stat => 
            `<div class="impact-stat">
                <h4>${stat.value}</h4>
                <p class="mb-0 text-muted">${stat.label}</p>
            </div>`
        ).join('');
        const impactElement = document.getElementById('projectImpact');
        if (impactElement) {
            impactElement.innerHTML = impactHtml;
        }
    }
    
    // Update objectives
    if (project.objectives && Array.isArray(project.objectives)) {
        const objectivesHtml = project.objectives.map(objective => 
            `<li class="mb-3"><i class="bi bi-arrow-right-circle-fill text-primary me-2"></i>${objective}</li>`
        ).join('');
        const objectivesElement = document.getElementById('projectObjectives');
        if (objectivesElement) {
            objectivesElement.innerHTML = objectivesHtml;
        }
    }
    
    // Update activities
    if (project.activities && Array.isArray(project.activities)) {
        const activitiesHtml = project.activities.map(activity => 
            `<li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>${activity}</li>`
        ).join('');
        const activitiesElement = document.getElementById('projectActivities');
        if (activitiesElement) {
            activitiesElement.innerHTML = activitiesHtml;
        }
    }
    
    // Update partners
    if (project.partners) {
        const partnersElement = document.getElementById('projectPartners');
        if (partnersElement) {
            partnersElement.innerHTML = `<p>${project.partners}</p>`;
        }
    }
    } catch (error) {
        console.error('Error loading project details:', error);
        // Show error message to user
        const descriptionElement = document.getElementById('projectDescription');
        if (descriptionElement) {
            descriptionElement.textContent = 'Error loading project details. Please try again later.';
        }
    }
});
