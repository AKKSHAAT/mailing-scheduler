export const mailingTemplates = [
  {
    id: 1,
    name: "Welcome Email",
    content:
      "<h1>Welcome, [First Name]!</h1><p>We’re thrilled to have you join us. Check out our services and make the most out of your journey!</p><a href='[CTA Link]' style='background-color: #007BFF; color: white; padding: 10px 15px; text-decoration: none;'>Get Started</a>",
  },
  {
    id: 2,
    name: "Promotion Email",
    content:
      "<h1>Exciting Offers Just for You!</h1><p>Hi [First Name], don’t miss out on our exclusive deals. Get 20% off on your next purchase!</p><a href='[Offer Link]' style='background-color: #28a745; color: white; padding: 10px 15px; text-decoration: none;'>Shop Now</a>",
  },
  {
    id: 3,
    name: "Feedback Request",
    content:
      "<h1>We’d Love Your Feedback!</h1><p>Hi [First Name], your opinion matters to us. Please take a moment to let us know how we’re doing.</p><a href='[Feedback Link]' style='background-color: #ffc107; color: black; padding: 10px 15px; text-decoration: none;'>Give Feedback</a>",
  },
  {
    id: 4,
    name: "Event Reminder",
    content:
      "<h1>Don’t Forget: [Event Name] is Coming Up!</h1><p>Hi [First Name], we’re excited to see you at [Event Name] on [Date/Time]. Don’t miss it!</p><a href='[Event Details Link]' style='background-color: #17a2b8; color: white; padding: 10px 15px; text-decoration: none;'>View Details</a>",
  },
];

export const recipientLists = [
  {
    id: 1,
    name: "Newsletter Subscribers",
    users: [
      {
        id: 1,
        email: "john.doe@example.com",
        firstName: "John",
        category: "Subscriber",
      },
      {
        id: 2,
        email: "jane.smith@example.com",
        firstName: "Jane",
        category: "Subscriber",
      },
    ],
  },
  {
    id: 2,
    name: "Active Customers",
    users: [
      {
        id: 3,
        email: "alex.taylor@example.com",
        firstName: "Alex",
        category: "Customer",
      },
      {
        id: 4,
        email: "sarah.connor@example.com",
        firstName: "Sarah",
        category: "Customer",
      },
    ],
  },
  {
    id: 3,
    name: "Webinar Attendees",
    users: [
      {
        id: 5,
        email: "michael.scott@example.com",
        firstName: "Michael",
        category: "Event Attendee",
      },
      {
        id: 6,
        email: "pam.beesly@example.com",
        firstName: "Pam",
        category: "Event Attendee",
      },
    ],
  },
];


export let scheduleList = [];