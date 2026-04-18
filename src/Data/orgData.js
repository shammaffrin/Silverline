export const sections = {
  administration: {
    title: "Administration",
    data: {
      name: "Shameela Naff",
      role: "Chief of Staff",
      
      children: [
        {
          name: "Aiswarya K B",
          role: "Executive Assistant",
          children: [
            { name: "Eida Dhafier", role: "Data Entry Clerk", children: [] },
            { name: "Receptionist", role: "Receptionist", children: [] },
            { name: "Rakesh R", role: "Office Assistant", children: [] },
            {
              name: "Ashraf KCR",
              role: "PRO cum Administrator",
              children: [{ name: "Cleaner", role: "1", children: [] }],
            },
            {
              name: "Humilda Ghuloom",
              role: "Jet Operations Technician",
              children: [],
            },
            { name: "Athar Hamood", role: "Data Entry Clerk", children: [] },
          ],
        },
      ],
    },
  },

  itTech: {
    title: "IT & Tech",
    data: {
      name: "Shameela Naff",
      role: "Chief of Staff",
      children: [
        {
          name: "Aiswarya K B",
          role: "Executive Assistant",
          children: [
            { name: "Roshan Mohd", role: "IT Assistant", children: [] },
            { name: "Shabas Ali", role: "IT Executive", children: [] },
            { name: "Pendagon", role: "Social Media Consultant", children: [] },
          ],
        },
      ],
    },
  },

  finance: {
    title: "Finance",
    data: {
      name: "Shameela Naff",
      role: "Chief of Staff",
      children: [
        {
          name: "Aiswarya K B",
          role: "Executive Assistant",
          children: [
            { name: "Mohd Rashid", role: "Finance Executive", children: [] },
            {
              name: "Najma Sheikh",
              role: "Finance Payable Executive",
              children: [],
            },
            { name: "Mohd Rafi", role: "Accountant", children: [] },
            { name: "Mohd Shinas", role: "Asst. Accountant", children: [] },
            { name: "Nusrat Fatimah", role: "Asst. Accountant", children: [] },
          ],
        },
      ],
    },
  },

  inventory: {
    title: "Inventory",
    data: {
      name: "Shameela Naff",
      role: "Chief of Staff",
      children: [
        {
          name: "Aiswarya K B",
          role: "Executive Assistant",
          children: [
            {
              name: "Ridhika M",
              role: "Inventory Management Lead",
              children: [
                {
                  name: "Raja Zain",
                  role: "Incharge Procurement",
                  children: [
                    {
                      name: "Noorudheen K P",
                      role: "Support Procurement",
                      children: [],
                    },
                    {
                      name: "Ajmal Thahir",
                      role: "Support Procurement",
                      children: [],
                    },
                    {
                      name: "Akshay Thomas",
                      role: "Document Controller",
                      children: [],
                    },
                    { name: "Driver", role: "1", children: [] },
                  ],
                },
                {
                  name: "Abdul Rahiman Safi",
                  role: "Incharge Store",
                  children: [
                    { name: "Hannan U B", role: "Support Store", children: [] },
                    { name: "Mohd Osama", role: "Support Store", children: [] },
                    { name: "Abinash M", role: "Support Store", children: [] },
                    { name: "Elayasan P", role: "Support Store", children: [] },
                    {
                      name: "Mohd Abdulla",
                      role: "Support Store",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },

  customerSupport: {
    title: "Customer Support",
    data: {
      name: "Arjun Ramachandran",
      role: "Operations Manager",
      children: [
        {
          name: "Mohd Sahal",
          role: "Service Head",
          children: [
            { name: "Jithin M", role: "Service Advisor", children: [] },
            { name: "Saroop J K", role: "Service Advisor", children: [] },
            { name: "Ranjit R", role: "RCA Engg Cum QC", children: [] },
            { name: "Haseeb U R", role: "Service Advisor", children: [] },
            { name: "Shafi P P", role: "Service Advisor", children: [] },
            { name: "Mohd Arshad", role: "Customer Support", children: [] },
            { name: "Gulam Yadala", role: "Customer Support", children: [] },
            { name: "Mohd Ajmal", role: "Customer Support", children: [] },
            { name: "Shafeega P A", role: "Customer Support", children: [] },
            { name: "Mechanic cum Driver", role: "15", children: [] },
            { name: "Electrician cum Driver", role: "3", children: [] },
            { name: "Mechanic", role: "10", children: [] },
            { name: "Electrician", role: "8", children: [] },
            { name: "Asst. Mechanic", role: "1", children: [] },
            { name: "Asst. Electrician", role: "1", children: [] },
            { name: "Driver", role: "14", children: [] },
          ],
        },
      ],
    },
  },

  fleetManagement: {
    title: "Fleet Management",
    data: {
      name: "Arjun Ramachandran",
      role: "Operations Manager",
      children: [
        {
          name: "Aniket Mane",
          role: "Fleet Administrator",
          children: [
            { name: "Fahim Abdul", role: "Resolution Executive", children: [] },
          ],
        },
      ],
    },
  },

  operations: {
    title: "Operations Desk",
    data: {
      name: "Arjun Ramachandran",
      role: "Operations Manager",
      children: [
        {
          name: "Aqjad",
          role: "Process Head (ERP Analyst)",
          children: [
            {
              name: "Arafath MS",
              role: "Functional Executive ERP",
              children: [],
            },
          ],
        },
        { name: "Shanid P P", role: "Operations Executive", children: [] },
      ],
    },
  },

  workshop: {
    title: "Workshop",
    data: {
      name: "Arjun Ramachandran",
      role: "Operations Manager",
      children: [
        {
          name: "Sahil Abbas",
          role: "Workshop Head",
          children: [
            { name: "Rajasth Shany", role: "Workshop Manager", children: [] },
            { name: "Anees P", role: "Electrical Engineer", children: [] },
            {
              name: "Vignesh V",
              role: "Workshop Execution Head",
              children: [],
            },
            { name: "Mechanic", role: "4", children: [] },
            { name: "Electrician", role: "14", children: [] },
            { name: "Painter", role: "2", children: [] },
            { name: "Helper", role: "2", children: [] },
          ],
        },
      ],
    },
  },

  logistics: {
    title: "Logistics",
    data: {
      name: "Arjun Ramachandran",
      role: "Operations Manager",
      children: [
        {
          name: "Mohd Safwan",
          role: "Logistics Executive",
          children: [
            { name: "Vignesh V", role: "Logistics Coordinator", children: [] },
            {
              name: "Abdul Rahman",
              role: "Logistics Coordinator",
              children: [],
            },
            {
              name: "Albert Sebastian",
              role: "Logistics Coordinator",
              children: [],
            },
            { name: "Haris B", role: "Logistics Coordinator", children: [] },
            { name: "Rithupargash", role: "Quality Analyst", children: [] },
            { name: "Driver", role: "17", children: [] },
          ],
        },
      ],
    },
  },
 
  heavyMvd: {
    title: "Heavy & MVD",
    data: {
      name: "Arjun Ramachandran",
      role: "Operations Manager",
      children: [
        {
          name: "Mohd Shinas",
          role: "Heavy MVD Dept Head",
          children: [
            {
              name: "Sarang K P",
              role: "Service Coordinator MVD",
              children: [],
            },
            {
              name: "Mohd Shahal",
              role: "Service Coordinator Heavy",
              children: [],
            },
            { name: "Sr. Mechanic", role: "30", children: [] },
            { name: "Asst. Mechanic", role: "3", children: [] },
            { name: "Electrician cum AC Technician", role: "1", children: [] },
            { name: "Mechanical Helper", role: "1", children: [] },
          ],
        },
      ],
    },
  },

  HSE: {
    title: "HSE",
    data: {
      name: "Arjun Ramachandran",
      role: "Operations Manager",
      children: [
        {
          name: "Athul C.S",
          role: "Production & HSE Head",
          children: [
            { name: "Ajeesh Biju", role: "HSE Coordinator", children: [] },
            { name: "Azif Shajim", role: "HSE Coordinator", children: [] },
          ],
        },
      ],
    },
  },

  Production: {
    title: "Production",
    data: {
      name: "Arjun Ramachandran",
      role: "Operations Manager",
      children: [
        {
          name: "Athul C.S",
          role: "Production & HSE Head",
          children: [
            {
              name: "Aravind Krishnan",
              role: "Operations Incharge - Production",
              children: [
                {
                  name: "Mohamed Falah",
                  role: "Production Coordinator",
                  children: [
                    { name: "Foreman 1", role: "Foreman", children: [] },
                    {
                      name: "Aluminium Fabricator 2",
                      role: "Aluminium Fabricator",
                      children: [],
                    },
                    { name: "Welder 13", role: "Welder", children: [] },
                    { name: "Carpenter 7", role: "Carpenter", children: [] },
                    { name: "Plumber 3", role: "Plumber", children: [] },
                    { name: "Helper 1", role: "Helper", children: [] },
                    {
                      name: "Electrician 2",
                      role: "Electrician",
                      children: [],
                    },
                    {
                      name: "Electrical cum Driver 1",
                      role: "Electrical cum Driver",
                      children: [],
                    },
                    { name: "Painter 5", role: "Painter", children: [] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },

  SALES: {
    title: "SALES",
    data: {
      name: "Thanzil Athinan",
      role: "Business Manager",
      children: [
        {
          name: "Abdul Hakeem",
          role: "Sales Admin",
          children: [
            { name: "Lakshmi K", role: "Sales Coordinator", children: [] },
          ],
        },
        {
          name: "Raj Thomas",
          role: "Sr. Sales Engineer",
          children: [],
        },
        {
          name: "Shamil",
          role: "Sr. Sales Engineer",
          children: [
            { name: "Mohd Nishad", role: "Sales Engineer", children: [] },
            { name: "Ashik K", role: "Sales Engineer", children: [] },
            {
              name: "Shabeer",
              role: "Sales Coordinator Executive",
              children: [],
            },
            { name: "Mohd Sifin", role: "Sales Executive", children: [] },
          ],
        },
        {
          name: "Afsal Nazar",
          role: "Sr. Sales Engineer",
          children: [],
        },
        {
          name: "Sharath K",
          role: "Sr. Sales Engineer",
          children: [
            { name: "Nabeel Sha", role: "Sales Engineer", children: [] },
          ],
        },
        {
          name: "Saif Muhammed",
          role: "Sr. Sales Engineer",
          children: [
            { name: "Amad M", role: "Sales Executive", children: [] },
            { name: "Fasil P", role: "Sales Executive", children: [] },
          ],
        },
        {
          name: "Jesvin Antony",
          role: "Sr. Sales Engineer",
          children: [{ name: "Anwar", role: "Sales Executive", children: [] }],
        },
      ],
    },
  },

  Collections: {
    title: "Collections",
    data: {
      name: "Thanzil Athinan",
      role: "Buisness Manager",
      children: [
        {
          name: "Shafi K",
          role: "Collection Team Lead",
          children: [
            {
              name: "Misab M",
              role: "Collection Coordinator & Documents Controller",
              children: [],
            },
            { name: "Sainuddeen", role: "Credit Controller", children: [] },
            { name: "Irshan K", role: "Credit Controller", children: [] },
            { name: "Ashraf MPR", role: "Collection Agent", children: [] },
            { name: "Mayed Abdulla", role: "Debt Collector", children: [] },
            { name: "Saeed Jasim", role: "Debt Collector", children: [] },
            { name: "Saqer Khalifa", role: "Debt Collector", children: [] },
            { name: "Driver 1", role: "", children: [] },
          ],
        },
      ],
    },
  },

  Invoice: {
    title: "INVOICE",
    data: {
      name: "Thanzil Athinan",
      role: "Business Manager",
      children: [
        {
          name: "Ajeesh M",
          role: "Invoice Team Lead",
          children: [
            {
              name: "Sayojiya J",
              role: "Invoice Coordinator",
              children: [],
            },
            {
              name: "Athira M",
              role: "Invoice Coordinator",
              children: [],
            },
            {
              name: "Mohd Asif",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Mohd Shibili",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Diya R",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Aswin P",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Ayishath",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Shehin",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Sreelajith V",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Arun K",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Aswathi A",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Stefy K",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Safna NA",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Shahina",
              role: "Sales Secretary",
              children: [],
            },
            {
              name: "Anju A",
              role: "Sales Secretary",
              children: [],
            },
          ],
        },
      ],
    },
  },
};
