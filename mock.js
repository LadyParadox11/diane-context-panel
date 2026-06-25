// Stand-in data for the context panel.
// Edit anything here, save, refresh the browser, and watch the panel react.
// (This is pretend data - no real people, no real accounts.)

// SCENARIO SELECTOR: Switch between different mock states by changing which MOCK_SCENARIOS line is active.
// Scenario 1 (Rich): Everything populated (Margaret, Chocolate Book project, meetings, docs, payment, notes).
// Scenario 2 (No Data): Sparse email from unknown sender (shows "No data" in most cards).

const MOCK_SCENARIOS = {
  rich: {
    email: {
      subject: "Re: Chocolate Book launch - venue confirmation",
      fromName: "Margaret Ellison",
      fromAddress: "margaret@brightpathfoundation.org",
      receivedAt: "2026-06-21T15:42:00",
      preview: "Wonderful news - the Riverside Hall is confirmed for the 14th...",
      attachments: [
        { name: "Riverside Hall - Invoice #2847.pdf", size: "1.2 MB", kind: "pdf" },
        { name: "Run of Show v3 - Margaret edits.xlsx", size: "340 KB", kind: "xlsx" }
      ]
    },
    contact: {
      name: "Margaret Ellison",
      role: "Events Director, Brightpath Foundation",
      relationship: "Partner - Chocolate Book launch",
      lastSpoke: "Spoke 3 days ago",
      inMesh: true,
      relatedPeople: [
        { name: "John Chen", context: "colleague" },
        { name: "Sarah Walsh", context: "friend" }
      ],
      notes: [
        "Prefers afternoon calls. #scheduling",
        "Allergic to nuts - flag for catering. #books",
        "Follow up in 2 weeks about the book tour schedule."
      ]
    },
    project: {
      name: "Chocolate Book - Launch",
      mapNumber: "05.2",
      area: "05. Books - Campaigns",
      stage: "Active",
      nextStep: "Confirm catering headcount by Friday"
    },
    documents: [
      { title: "Riverside Hall - Signed Agreement.pdf", where: "Drive / 05.2 Launch", kind: "pdf" },
      { title: "Run of Show v3.xlsx", where: "Drive / 05.2 Launch", kind: "xlsx" },
      { title: "Guest List (draft).docx", where: "Drive / 05.2 Launch", kind: "docx" }
    ],
    meetings: [
      { title: "Launch walkthrough w/ Margaret", when: "Tue Jun 23, 10:00 AM" },
      { title: "Catering call", when: "Thu Jun 25, 2:30 PM" }
    ],
    payment: {
      matched: true,
      merchant: "Riverside Hall Deposit",
      amount: "$750.00",
      card: "Business Visa 4417",
      receipt: "attached to this email",
      note: "Logged in YNAB / Books-Campaigns"
    },
    suggestedAction: "Add task: confirm catering headcount (Project: Chocolate Book - Launch)"
  },

  sparse: {
    email: {
      subject: "Request for quote on corporate training workshops",
      fromName: "Alex Patterson",
      fromAddress: "alex.patterson@corporatesolutions.io",
      receivedAt: "2026-06-24T09:15:00",
      preview: "Hi, we're interested in discussing your training programs for our team...",
      attachments: []
    },
    contact: {
      name: "Alex Patterson",
      role: null,
      relationship: null,
      lastSpoke: null,
      inMesh: false,
      relatedPeople: [],
      notes: []
    },
    project: null,
    documents: [],
    meetings: [],
    payment: {
      matched: false
    },
    suggestedAction: null
  },

  complete: {
    email: {
      subject: "Final feedback on the conference materials",
      fromName: "Priya Desai",
      fromAddress: "priya@creativevision.co",
      receivedAt: "2026-06-23T14:30:00",
      preview: "Great work on the design direction! I've reviewed the keynote slides and branding guidelines...",
      attachments: [
        { name: "Conference Branding Guide - FINAL.pdf", size: "2.8 MB", kind: "pdf" },
        { name: "Keynote Slide Deck - Priya Comments.pptx", size: "4.2 MB", kind: "pptx" },
        { name: "Speaker Bios and Headshots.zip", size: "156 MB", kind: "pdf" }
      ]
    },
    contact: {
      name: "Priya Desai",
      role: "Creative Director, Creative Vision Studios",
      relationship: "Lead designer - Thought Leaders Conference",
      lastSpoke: "Spoke 2 days ago",
      inMesh: true,
      relatedPeople: [
        { name: "David Chen", context: "design partner" },
        { name: "Lisa Huang", context: "client liaison" }
      ],
      notes: [
        "Prefers async communication — check Slack before calling.",
        "Loves detailed feedback. #design",
        "Color palette: warm earth tones preferred.",
        "Follow up after conference launch to discuss case study."
      ]
    },
    project: {
      name: "Thought Leaders Conference 2026",
      mapNumber: "03.5",
      area: "03. Conferences & Events",
      stage: "In Review",
      nextStep: "Incorporate branding feedback by June 28"
    },
    documents: [
      { title: "Conference Branding Guidelines - Draft v4.pdf", where: "Drive / 03.5 Conference / Design", kind: "pdf" },
      { title: "Keynote Slide Template.pptx", where: "Drive / 03.5 Conference / Design", kind: "pptx" },
      { title: "Speaker Bio Template.docx", where: "Drive / 03.5 Conference / Content", kind: "docx" },
      { title: "Event Budget & Timeline.xlsx", where: "Drive / 03.5 Conference", kind: "xlsx" }
    ],
    meetings: [
      { title: "Design review call w/ Priya", when: "Wed Jun 25, 3:00 PM" },
      { title: "Conference production sync", when: "Fri Jun 27, 10:00 AM" },
      { title: "Final walkthrough (in-person)", when: "Mon Jun 30, 9:00 AM" }
    ],
    payment: {
      matched: true,
      merchant: "Creative Vision Studios - Design Services",
      amount: "$3,500.00",
      card: "Business Visa 4417",
      receipt: "attached to this email",
      note: "Logged in YNAB / Events-Conferences"
    },
    suggestedAction: "Add task: gather speaker bios and photos (Project: Thought Leaders Conference 2026)"
  },

  heavyScroll: {
    email: {
      subject: "Quarterly financial review and budget planning",
      fromName: "Robert Kim",
      fromAddress: "robert.kim@financialpartners.com",
      receivedAt: "2026-06-22T11:20:00",
      preview: "Following up on our Q3 planning session. I've attached all the supporting docs and spreadsheets...",
      attachments: [
        { name: "Q3 Budget Proposal v2.xlsx", size: "1.5 MB", kind: "xlsx" },
        { name: "Expense Breakdown by Department.pdf", size: "890 KB", kind: "pdf" },
        { name: "Cash Flow Projections 2026.xlsx", size: "2.1 MB", kind: "xlsx" },
        { name: "Vendor Contracts Summary.docx", size: "340 KB", kind: "docx" },
        { name: "Tax Implications Analysis.pdf", size: "1.8 MB", kind: "pdf" }
      ]
    },
    contact: {
      name: "Robert Kim",
      role: "CFO, Financial Partners Inc.",
      relationship: "Finance advisor - Strategic planning",
      lastSpoke: "Spoke 1 week ago",
      inMesh: true,
      relatedPeople: [
        { name: "Susan Martinez", context: "accountant" },
        { name: "James Wilson", context: "legal advisor" },
        { name: "Elena Rodriguez", context: "tax specialist" }
      ],
      notes: [
        "Prefers detailed written summaries before calls.",
        "Always sends spreadsheets — review before meeting.",
        "Quarterly check-in pattern (Jan, Apr, Jul, Oct).",
        "Conservative with risk — prefers proven strategies.",
        "Has connections in private equity space.",
        "Allergic to vague timelines — be specific.",
        "Follow up in 3 days with budget feedback."
      ]
    },
    project: {
      name: "2026 Strategic Financial Planning",
      mapNumber: "01.3",
      area: "01. Core Operations - Finance",
      stage: "In Progress",
      nextStep: "Review Q3 budget and provide feedback by June 28"
    },
    documents: [
      { title: "2025 Annual Financial Report.pdf", where: "Drive / 01.3 Finance / Reports", kind: "pdf" },
      { title: "Budget Templates & Guidelines.docx", where: "Drive / 01.3 Finance / Planning", kind: "docx" },
      { title: "Historical Spending Analysis 2023-2025.xlsx", where: "Drive / 01.3 Finance / Analysis", kind: "xlsx" },
      { title: "Risk Assessment Matrix.pdf", where: "Drive / 01.3 Finance / Risk", kind: "pdf" },
      { title: "Vendor Performance Scorecard.xlsx", where: "Drive / 01.3 Finance / Vendors", kind: "xlsx" },
      { title: "Cash Reserve Policy.docx", where: "Drive / 01.3 Finance / Policies", kind: "docx" }
    ],
    meetings: [
      { title: "Q3 budget deep dive", when: "Wed Jun 25, 2:00 PM" },
      { title: "Finance review with team", when: "Fri Jun 27, 10:30 AM" },
      { title: "Board presentation prep", when: "Mon Jun 30, 3:00 PM" }
    ],
    payment: {
      matched: true,
      merchant: "Financial Partners Inc. - Consulting",
      amount: "$5,000.00",
      card: "Business Amex 5892",
      receipt: "attached to this email",
      note: "Logged in YNAB / Finance-Consulting"
    }
  },

  internalTeam: {
    email: {
      subject: "Team meeting notes — Product roadmap updates",
      fromName: "Emma Thompson",
      fromAddress: "emma@yourcompany.internal",
      receivedAt: "2026-06-24T16:45:00",
      preview: "Great discussion today! Here's the recap of decisions and next steps for the Q3 launch...",
      attachments: [
        { name: "Product Roadmap Q3-Q4.pdf", size: "3.2 MB", kind: "pdf" },
        { name: "Meeting Recording Link.docx", size: "45 KB", kind: "docx" }
      ]
    },
    contact: {
      name: "Emma Thompson",
      role: "VP Product Development (your team)",
      relationship: "Direct report - Product lead",
      lastSpoke: "Spoke today",
      inMesh: true,
      relatedPeople: [
        { name: "Marcus Johnson", context: "engineering lead" },
        { name: "Sophia Lee", context: "design lead" },
        { name: "Aisha Patel", context: "product manager" }
      ],
      notes: [
        "Morning person — best before 11 AM.",
        "Weekly 1-on-1 Mondays at 9 AM.",
        "Focused on shipping velocity this quarter.",
        "Strong mentor — good with new hires."
      ]
    },
    project: {
      name: "Q3 Product Launch Initiative",
      mapNumber: "02.1",
      area: "02. Product Development",
      stage: "Active",
      nextStep: "Confirm engineering capacity for feature set by tomorrow"
    },
    documents: [
      { title: "Q3 Launch Timeline.xlsx", where: "Drive / 02.1 Launch", kind: "xlsx" },
      { title: "Feature Specifications.docx", where: "Drive / 02.1 Launch", kind: "docx" }
    ],
    meetings: [
      { title: "Team standup", when: "Tomorrow at 9:00 AM" },
      { title: "Engineering capacity review", when: "Wed Jun 25, 1:00 PM" }
    ],
    payment: {
      matched: false
    }
  },

  meetingHeavy: {
    email: {
      subject: "Confirming your calendar — Summer event series",
      fromName: "Nicole Foster",
      fromAddress: "nicole.foster@eventplanning.co",
      receivedAt: "2026-06-23T10:15:00",
      preview: "Just checking — you're confirmed for all five sessions? The first one kicks off July 2nd...",
      attachments: [
        { name: "Event Series Schedule & Logistics.pdf", size: "2.5 MB", kind: "pdf" }
      ]
    },
    contact: {
      name: "Nicole Foster",
      role: "Event Director, Event Planning Co.",
      relationship: "Speaker series organizer",
      lastSpoke: "Spoke 5 days ago",
      inMesh: true,
      relatedPeople: [
        { name: "Tom Anderson", context: "venue manager" },
        { name: "Rachel Green", context: "marketing" }
      ],
      notes: [
        "Ultra-organized. Sends detailed timelines.",
        "Appreciates confirmation requests.",
        "Good at problem-solving on the fly.",
        "Follow up 1 week before each event."
      ]
    },
    project: {
      name: "Summer Thought Leadership Series",
      mapNumber: "04.2",
      area: "04. Speaking & Events",
      stage: "Active",
      nextStep: "Confirm attendance for all 5 sessions ASAP"
    },
    documents: [
      { title: "Speaker Brief & Bio.docx", where: "Drive / 04.2 Series", kind: "docx" },
      { title: "Event Logistics & Parking Info.pdf", where: "Drive / 04.2 Series", kind: "pdf" }
    ],
    meetings: [
      { title: "Summer Series - Session 1 (Opening Keynote)", when: "Wed Jul 2, 9:00 AM" },
      { title: "Summer Series - Session 2 (Panel Discussion)", when: "Wed Jul 9, 10:00 AM" },
      { title: "Summer Series - Session 3 (Workshop)", when: "Wed Jul 16, 2:00 PM" },
      { title: "Summer Series - Session 4 (Q&A)", when: "Wed Jul 23, 3:00 PM" },
      { title: "Summer Series - Session 5 (Closing Remarks)", when: "Wed Jul 30, 10:00 AM" }
    ],
    payment: {
      matched: true,
      merchant: "Event Planning Co. - Speaker Fee",
      amount: "$2,000.00",
      card: "Business Visa 4417",
      receipt: "invoice attached",
      note: "Logged in YNAB / Speaking-Events"
    }
  },

  vendorMinimal: {
    email: {
      subject: "Invoice #8472 — Office supplies renewal",
      fromName: "James Patterson",
      fromAddress: "orders@officesupply.com",
      receivedAt: "2026-06-24T08:30:00",
      preview: "Your order has shipped. Tracking number and invoice details attached. Estimated delivery: June 27...",
      attachments: [
        { name: "Invoice_8472.pdf", size: "340 KB", kind: "pdf" },
        { name: "Packing_Slip.pdf", size: "120 KB", kind: "pdf" }
      ]
    },
    contact: {
      name: "James Patterson",
      role: "Order Fulfillment, Office Supply Co.",
      relationship: "Vendor - recurring orders",
      lastSpoke: "Spoke 3 weeks ago",
      inMesh: false,
      relatedPeople: [],
      notes: []
    },
    project: null,
    documents: [],
    meetings: [],
    payment: {
      matched: true,
      merchant: "Office Supply Co.",
      amount: "$287.50",
      card: "Business Visa 4417",
      receipt: "attached to this email",
      note: "Logged in YNAB / Supplies-Office"
    }
  },

  documentHeavy: {
    email: {
      subject: "Complete project archive — Please review and archive",
      fromName: "Kevin Martinez",
      fromAddress: "kevin.martinez@archiveservices.io",
      receivedAt: "2026-06-21T13:40:00",
      preview: "I've organized all project deliverables and supporting files. Everything is ready for your review before final storage...",
      attachments: [
        { name: "Project Deliverables Index.xlsx", size: "450 KB", kind: "xlsx" }
      ]
    },
    contact: {
      name: "Kevin Martinez",
      role: "Records Manager, Archive Services",
      relationship: "Document management consultant",
      lastSpoke: "Spoke 2 weeks ago",
      inMesh: true,
      relatedPeople: [
        { name: "Lisa Ortiz", context: "compliance officer" }
      ],
      notes: [
        "Meticulous with file organization.",
        "Prefers detailed descriptions for archiving.",
        "Follow up with final sign-off."
      ]
    },
    project: {
      name: "2025 Projects - Final Archive",
      mapNumber: "06.4",
      area: "06. Administration - Records",
      stage: "Pending Review",
      nextStep: "Review archived files and approve for storage by July 1"
    },
    documents: [
      { title: "2025 Project Proposals (All).pdf", where: "Drive / 06.4 Archive / Proposals", kind: "pdf" },
      { title: "Final Deliverables Compilation.docx", where: "Drive / 06.4 Archive / Deliverables", kind: "docx" },
      { title: "Budget Summaries & Reports.xlsx", where: "Drive / 06.4 Archive / Finance", kind: "xlsx" },
      { title: "Client Feedback & Testimonials.pdf", where: "Drive / 06.4 Archive / Client", kind: "pdf" },
      { title: "Team Meeting Notes Archive.docx", where: "Drive / 06.4 Archive / Notes", kind: "docx" },
      { title: "Post-Project Analysis & Lessons Learned.pdf", where: "Drive / 06.4 Archive / Analysis", kind: "pdf" },
      { title: "Contracts & Agreements.docx", where: "Drive / 06.4 Archive / Legal", kind: "docx" },
      { title: "Timeline & Milestone Tracking.xlsx", where: "Drive / 06.4 Archive / Timeline", kind: "xlsx" }
    ],
    meetings: [
      { title: "Archive review & sign-off", when: "Thu Jun 26, 11:00 AM" }
    ],
    payment: {
      matched: false
    }
  }
};

// Select which scenario to display:
// MOCK_SCENARIOS.rich, MOCK_SCENARIOS.sparse, MOCK_SCENARIOS.complete,
// MOCK_SCENARIOS.heavyScroll, MOCK_SCENARIOS.internalTeam,
// MOCK_SCENARIOS.meetingHeavy, MOCK_SCENARIOS.vendorMinimal, MOCK_SCENARIOS.documentHeavy
const MOCK = MOCK_SCENARIOS.internalTeam;
