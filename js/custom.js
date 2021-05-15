$(document).ready(function() {
    const boneMarrowInstructions = [{
            "image": "images/hospital.png",
            "about": "Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy."
        },
        {
            "image": "images/hospital.png",
            "about": "Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor."
        },
        {
            "image": "images/hospital.png",
            "about": "Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad."
        },
        {
            "image": "images/hospital.png",
            "about": "Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent"
        },
        {
            "image": "images/hospital.png",
            "about": "Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad."
        }
    ]

    const warningSigns = [{
            "signImage": "images/Group 2 (1).png",
            "className": "card-img-left",
            "about": "Failure to thrive – not gaining weight and height as per the age norms"
        },
        {
            "signImage": "images/Group.png",
            "className": "card-img-left1",
            "about": "Infections warranting multiple hospitalizations"
        },
        {
            "signImage": "images/Group (1).png",
            "className": "card-img-left",
            "about": "Requirement of intravenous antibiotics to clear infections"
        },
        {
            "signImage": "images/Group (2).png",
            "className": "card-img-left2",
            "about": "2 or more episodes of pneumonia"
        },
        {
            "signImage": "images/Group (4).png",
            "className": "card-img-left",
            "about": "Family history of death of children at young age due to immune deficiency"
        },
        {
            "signImage": "images/Group (3).png",
            "className": "card-img-left1",
            "about": "Repeated episodes of diarrhea"
        },
        {
            "signImage": "images/Group 2 (2).png",
            "className": "card-img-left",
            "about": "2 or more episodes of sinus infections within a year"
        },
        {
            "signImage": "images/Group 2.png",
            "className": "card-img-left2",
            "about": "2 or more episodes of ear discharge"
        },
        {
            "signImage": "images/Group 2 (3).png",
            "className": "card-img-left",
            "about": "2 or more episodes of sinus infections within a year"
        },
        {
            "signImage": "images/Group (5).png",
            "className": "card-img-left2",
            "about": "2 or more episodes of ear discharge"
        }
    ]

    const testimonials = [{
            "image": "images/Bitmap.png",
            "name": "John Doe",
            "role": "Software Engineer",
            "about": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            "image": "images/Bitmap.png",
            "name": "John Doe",
            "role": "Software Engineer",
            "about": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
    ]

    const doctors = {
        "Pediatric BMT": [{
                "name": "Dr. Vijay Agarwal",
                "qualification": "MD, MRCP, PhD,CCT <br> Lead & Sr. Consultant - Medical Oncology & Haematology",
                "about": "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
                "dept": "Pediatric BMT",
                "image": "images/doc.png"
            },
            {
                "name": "Dr. Vijay Agarwal",
                "qualification": "MD, MRCP, PhD,CCT <br> Lead & Sr. Consultant - Medical Oncology & Haematology",
                "about": "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
                "dept": "Pediatric BMT",
                "image": "images/doc.png"
            }
        ],
        "Adult BMT": [{
                "name": "Dr. Vijay Agarwal",
                "qualification": "MD, MRCP, PhD,CCT <br> Lead & Sr. Consultant - Medical Oncology & Haematology",
                "about": "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
                "dept": "Adult BMT",
                "image": "images/doc.png"
            },
            {
                "name": "Dr. Vijay Agarwal",
                "qualification": "MD, MRCP, PhD,CCT <br> Lead & Sr. Consultant - Medical Oncology & Haematology",
                "about": "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
                "dept": "Adult BMT",
                "image": "images/doc.png"
            }
        ]
    };

    const footerLinks = [{
            "image": "images/Group 10.png",
            "link": "#"
        },
        {
            "image": "images/Group 26.png",
            "link": "#"
        },
        {
            "image": "images/003-youtube 2.png",
            "link": "#"
        },
        {
            "image": "images/005-twitter 2.png",
            "link": "#"
        },
        {
            "image": "images/006-linkedin 2.png",
            "link": "#"
        }
    ]

    function createDoctorTemplate(doctorData, isHeader) {
        return `
            <img src="${doctorData.image}" class="card-img-top mb-3" alt="doc">
            <h4 class="font-weight-bold name">${doctorData.name}</h4>
            <p class="qual">
                ${doctorData.qualification}
            </p>
            <div class="line5 ${isHeader ? 'mb-3' : ''}"></div>
            <p class="font-weight-lighter">
                ${doctorData.about}
            </p>
            <div class="button">
                <button type="button" class="btn btn-primary mt-3 bg-tim border-0">Know More</button>
            </div>
        `;
    }

    function createGroupTemplate(groupData) {
        var groupTemplate = '';

        for (const dept in groupData) {
            var doctorTemplate = '';
            var doctors = groupData[dept];

            for (const [index, doctor] of doctors.entries()) {
                if (index == 0) {
                    doctorTemplate = `${doctorTemplate}
                    <div class="cad-header text-dark ml-3 f-20 text-center mt-5">
                        <h4 class="docts font-weight-bold mb-4">${dept}</h4>
                        ${createDoctorTemplate(doctor, true)}
                        <div class="line6 mt-4"></div>
                    </div>
                    `;
                } else {
                    doctorTemplate = `${doctorTemplate}
                    <div class="card-body text-center">
                        ${createDoctorTemplate(doctor, false)}
                    </div
                    `;
                }
            }

            groupTemplate = `
                <div class="col-md-6">
                    <div class="card bg-light outline-none border-0">
                       ${doctorTemplate}
                    </div>
                </div>
            `;

            $('#doctors-list').append(groupTemplate);
        }
    }

    function createBoneMarrowInstructions(list) {
        var template = '';

        for (const [index, item] of list.entries()) {
            template = `
                ${template}
                <div class="row">
                    <div class="col-md-12">
                        <div class="ml-20">
                            <img src="${item.image}" alt="hospital">
                            <span class="font-weight-lighter desc"> 
                                ${item.about}
                            </span>
                        </div>
                    </div>   
                </div>
                ${list.length === index ? '' : '<br/>'}
            `;
        }

        $('#bone-marrow-instructions').append(template);
    };

    function createTestimonials(list) {
        var template = '';

        for (const [index, item] of list.entries()) {
            template = `
                ${template}
                <div class="col-md-6">
                <div class="card border-0 shadow bg-white rounded">
                    <div class="card-heading">
                        <div class="row pt-4 pl-3">
                            <div class="col-md-3">
                                <img src="${item.image}" alt="img-responsive">
                            </div>
                            <div class="col-md-6">
                                <h5 class="font-weight-bold">${item.name}</h5>
                                <h6 class="font-weight-lighter prof">${item.role}</h6>
                            </div>
                            <div class="col-md-3">
                                <img src="images/” (1).png" alt="img-responsive">
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="body-text">
                            <em>${item.about}</em>
                        </p>
                    </div>
                </div>
            </div>
            `;
        }

        $('#testimonials-list').append(template);
    };

    function createWarningSigns(list) {
        var template = '';
        var collectColumns = [];

        for (const [index, item] of list.entries()) {
            collectColumns.push(item);

            if (index !== 0 && ((index + 1) % 4 === 0 || index === list.length - 1)) {
                var colsTemplate = '';

                for (const col of collectColumns) {
                    colsTemplate = `
                    ${colsTemplate}
                    <div class="col-md-3">
                        <div class="card" style="width: 14rem;height: 9em;">
                            <img src="${col.signImage}" class="${col.className} pl-3 pt-3" alt="...">
                            <div class="card-body">
                              <p class="card-text">${col.about}</p>
                            </div>
                          </div>
                    </div>
                    `;
                };

                template = `
                    <div class="row ${template !== '' ? 'mt-4' : ''}">
                        ${colsTemplate}
                    </div>
                `;

                $('#warning-signs').append(template);
                collectColumns = [];
            }
        }
    }

    function createFooterSocialIcons(list) {
        var template = '';

        for (const icon of list) {
            template = `
                ${template}
                <img src="${icon.image}" alt="img-responsive">
            `;
        }

        $('#footer-social-icons').append(
            `<div class="col ml-75">
                ${template}
                <img src="images/Group 9.png" class="float-right arrow mt-3" alt="img-responsive">
            </div>`
        );
    }

    createGroupTemplate(doctors);
    createWarningSigns(warningSigns);
    createBoneMarrowInstructions(boneMarrowInstructions);
    createTestimonials(testimonials);
    createFooterSocialIcons(footerLinks);
})