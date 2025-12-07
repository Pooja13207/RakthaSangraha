// RakthaSangraha - Data Configuration File
// Edit this file to update the UI automatically

const AppData = {
  // Dashboard Statistics
  stats: {
    bloodBanks: 156,
    hospitals: 89,
    activeDonors: 12450,
    criticalRequests: 23
  },

  // Blood Inventory Data
  bloodInventory: [
    { group: "A+", units: 245, banks: 42, demand: "High" },
    { group: "A-", units: 28, banks: 18, demand: "Critical" },
    { group: "B+", units: 189, banks: 38, demand: "Medium" },
    { group: "B-", units: 15, banks: 12, demand: "Critical" },
    { group: "AB+", units: 78, banks: 25, demand: "Low" },
    { group: "AB-", units: 22, banks: 10, demand: "Critical" },
    { group: "O+", units: 312, banks: 48, demand: "High" },
    { group: "O-", units: 45, banks: 22, demand: "High" }
  ],

  // Urgent Blood Requests
  urgentRequests: [
    {
      id: 1,
      hospital: "City General Hospital",
      location: "Bangalore Central",
      bloodType: "O-",
      units: 4,
      note: "Emergency surgery patient - immediate need",
      dateTime: "2024-12-05 14:30",
      priority: "Critical"
    },
    {
      id: 2,
      hospital: "Apollo Medical Center",
      location: "Koramangala",
      bloodType: "AB-",
      units: 2,
      note: "Cancer patient undergoing treatment",
      dateTime: "2024-12-05 13:15",
      priority: "Urgent"
    },
    {
      id: 3,
      hospital: "Manipal Hospital",
      location: "Whitefield",
      bloodType: "B-",
      units: 3,
      note: "Accident victim - multiple injuries",
      dateTime: "2024-12-05 12:45",
      priority: "Critical"
    },
    {
      id: 4,
      hospital: "Fortis Healthcare",
      location: "Bannerghatta Road",
      bloodType: "A-",
      units: 2,
      note: "Scheduled heart surgery tomorrow",
      dateTime: "2024-12-05 11:00",
      priority: "Urgent"
    },
    {
      id: 5,
      hospital: "Narayana Health",
      location: "Electronic City",
      bloodType: "O+",
      units: 5,
      note: "Maternity emergency case",
      dateTime: "2024-12-05 10:30",
      priority: "Critical"
    }
  ],

  // District-Wise Data
  districts: [
    {
      name: "Bangalore Urban",
      totalUnits: 1250,
      bloodBanks: 45,
      criticalTypes: 2,
      status: "Adequate"
    },
    {
      name: "Bangalore Rural",
      totalUnits: 380,
      bloodBanks: 12,
      criticalTypes: 4,
      status: "Low"
    },
    {
      name: "Mysore",
      totalUnits: 890,
      bloodBanks: 28,
      criticalTypes: 1,
      status: "Adequate"
    },
    {
      name: "Mangalore",
      totalUnits: 720,
      bloodBanks: 22,
      criticalTypes: 2,
      status: "Adequate"
    },
    {
      name: "Hubli-Dharwad",
      totalUnits: 280,
      bloodBanks: 15,
      criticalTypes: 5,
      status: "Critical"
    },
    {
      name: "Belgaum",
      totalUnits: 450,
      bloodBanks: 18,
      criticalTypes: 3,
      status: "Low"
    },
    {
      name: "Gulbarga",
      totalUnits: 190,
      bloodBanks: 8,
      criticalTypes: 6,
      status: "Critical"
    },
    {
      name: "Shimoga",
      totalUnits: 520,
      bloodBanks: 14,
      criticalTypes: 2,
      status: "Adequate"
    }
  ],

  // Blood Groups for dropdowns
  bloodGroups: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],

  // Urgency Levels
  urgencyLevels: ["Urgent", "Critical"]
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppData;
}
