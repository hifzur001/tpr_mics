import { Users, DollarSign, FileText, Banknote, Briefcase } from "lucide-react"

export const products = [
  {
    id: 1,
    name: "HRPM (Human Resource & Payroll Management)",
    slug: "hrpm",
    shortDescription: "A comprehensive solution for managing human resources and payroll efficiently.",
    detailedDescription:
      "HRPM is an all-in-one Human Resource and Payroll Management system designed to streamline your HR operations from recruitment to retirement. It automates complex tasks, ensures compliance, and provides valuable insights into your workforce.",
    mainImage: "/placeholder.svg?height=700&width=1000",
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=HRPM+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=HRPM+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=HRPM+Screenshot+3",
    ],
    features: [
      "Employee Management: Centralized database for all employee information, including personal details, employment history, and documents.",
      "Payroll Processing: Automated payroll calculations, tax deductions, benefits management, and direct deposits with customizable pay cycles.",
      "Leave Management: Comprehensive system to track and manage employee leave requests, approvals, balances, and policies.",
      "Attendance Tracking: Integrated time and attendance system with support for various methods like biometric, web, and mobile check-ins.",
      "Performance Reviews: Tools to conduct and track employee performance evaluations, set goals, and manage feedback cycles.",
      "Recruitment & Onboarding: Streamline hiring processes from job posting to candidate tracking, interview scheduling, and new employee onboarding.",
      "Compliance Management: Ensure adherence to labor laws, tax regulations, and company policies with built-in compliance features and reporting.",
      "Self-Service Portal: Empower employees with a self-service portal to access payslips, apply for leave, update personal information, and view benefits.",
      "Reporting & Analytics: Generate customizable reports and dashboards for HR metrics, payroll costs, attendance trends, and more.",
    ],
    benefits: [
      "Streamlined HR operations: automate repetitive tasks and reduce paperwork.",
      "Accurate payroll processing: minimize errors and ensure timely payments.",
      "Greater compliance: built-in adherence to tax and labor regulations.",
      "Improved employee satisfaction: self-service portal and transparent processes.",
      "Actionable insights: advanced analytics for data-driven HR decisions.",
      "Enhanced data security: role-based access and encryption of sensitive data.",
    ],
    pricing: {
      starter: { price: "$99/month", features: ["Up to 50 Employees", "Basic Payroll", "Leave Management"] },
      professional: {
        price: "$299/month",
        features: ["Up to 200 Employees", "Advanced Payroll", "Performance Management", "Attendance Tracking"],
      },
      enterprise: {
        price: "Custom",
        features: ["Unlimited Employees", "Full Customization", "Dedicated Support", "All Features"],
      },
    },
    icon: Users,
    metadata: {
      title: "HRPM - Human Resource & Payroll Management Software",
      description:
        "Comprehensive HR and payroll solution for efficient workforce management, automated payroll, and improved employee satisfaction.",
    },
  },
  {
    id: 2,
    name: "Accounting Software",
    slug: "accounting",
    shortDescription: "Robust accounting software to manage finances, invoicing, and reporting.",
    detailedDescription:
      "Our Accounting Software provides a robust and intuitive platform to manage all your financial operations. From general ledger to financial reporting, it gives you a clear and accurate overview of your financial health.",
    mainImage: "/placeholder.svg?height=700&width=1000",
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Accounting+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Accounting+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Accounting+Screenshot+3",
    ],
    features: [
      "General Ledger: Manage all financial transactions, accounts, and journal entries.",
      "Accounts Payable/Receivable: Track money owed to suppliers and money due from customers with automated reminders.",
      "Invoicing & Billing: Create and send professional invoices, manage recurring bills, and track payment statuses.",
      "Financial Reporting: Generate comprehensive financial reports including balance sheets, income statements, cash flow statements, and custom reports.",
      "Bank Reconciliation: Easily match bank statements with your accounting records to ensure accuracy.",
      "Expense Management: Track and categorize all business expenses, integrate with bank feeds for automated entry.",
      "Multi-currency Support: Handle transactions in various currencies with real-time exchange rate updates.",
      "Budgeting & Forecasting: Create and monitor budgets, and generate financial forecasts.",
      "Tax Management: Simplify tax preparation with organized financial data and reporting tools.",
    ],
    benefits: [
      "Accurate financial tracking: Keep precise records of all financial activities.",
      "Automated invoicing: Save time with automated billing and reminders.",
      "Better financial insights: Make informed decisions with real-time financial data.",
      "Compliance readiness: Simplify tax preparation and regulatory compliance.",
      "Improved cash flow: Monitor receivables and payables effectively.",
      "Reduced errors: Automate calculations and reduce manual data entry mistakes.",
    ],
    pricing: {
      starter: { price: "$79/month", features: ["Basic Accounting", "Invoicing", "Expense Tracking"] },
      professional: {
        price: "$199/month",
        features: ["Full Accounting Features", "Multi-currency", "Advanced Reporting"],
      },
      enterprise: { price: "Custom", features: ["Unlimited Users", "Dedicated Support", "Custom Integrations"] },
    },
    icon: DollarSign,
    metadata: {
      title: "Accounting Software - Manage Your Finances",
      description:
        "Robust accounting software for efficient financial management, automated invoicing, and comprehensive reporting.",
    },
  },
  {
    id: 3,
    name: "Invoicing System",
    slug: "invoicing",
    shortDescription: "An intuitive system for creating, sending, and tracking professional invoices.",
    detailedDescription:
      "Our Invoicing System is designed to simplify your billing process and accelerate payments. Create professional, customizable invoices, send them with ease, and track their status until payment is received.",
    mainImage: "/placeholder.svg?height=700&width=1000",
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Invoicing+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Invoicing+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Invoicing+Screenshot+3",
    ],
    features: [
      "Customizable Templates: Create professional invoices with your branding, logo, and custom fields.",
      "Automated Reminders: Send automatic payment reminders to clients for overdue invoices.",
      "Payment Tracking: Monitor invoice statuses (sent, viewed, paid, overdue) and track all payments.",
      "Client Management: Keep a comprehensive database of all your clients, their contact information, and billing history.",
      "Recurring Invoices: Set up invoices to be generated and sent automatically at regular intervals for recurring services.",
      "Online Payments: Integrate with popular payment gateways (e.g., Stripe, PayPal) for easy online payment collection.",
      "Estimates & Quotes: Create and send professional estimates and convert them into invoices with a single click.",
      "Reporting: Generate reports on sales, outstanding invoices, and payment trends.",
      "Multi-currency Support: Issue invoices in different currencies.",
    ],
    benefits: [
      "Faster payment collection: Accelerate your cash flow with timely invoices and reminders.",
      "Professional-looking invoices: Enhance your brand image with custom templates.",
      "Reduced manual effort: Automate repetitive invoicing tasks.",
      "Improved cash flow: Better visibility into outstanding payments.",
      "Error reduction: Minimize mistakes with automated calculations.",
      "Enhanced client relationships: Provide clear and easy-to-understand invoices.",
    ],
    pricing: {
      basic: { price: "$29/month", features: ["Up to 50 Invoices/month", "Basic Templates", "Payment Tracking"] },
      pro: {
        price: "$59/month",
        features: ["Unlimited Invoices", "Custom Templates", "Automated Reminders", "Online Payments"],
      },
      premium: {
        price: "$99/month",
        features: ["All Pro Features", "Recurring Invoices", "Multi-currency", "Advanced Reporting"],
      },
    },
    icon: FileText,
    metadata: {
      title: "Invoicing System - Create & Track Invoices",
      description:
        "Intuitive invoicing system for professional billing, automated reminders, and efficient payment tracking.",
    },
  },
  {
    id: 4,
    name: "Loan Management Application",
    slug: "loan-management",
    shortDescription: "A secure and efficient application for managing loan applications and disbursements.",
    detailedDescription:
      "Our Loan Management Application provides a secure and efficient platform for managing the entire loan lifecycle, from initial application to final repayment. It's designed for financial institutions to streamline operations and improve customer experience.",
    mainImage: "/placeholder.svg?height=700&width=1000",
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Loan+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Loan+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Loan+Screenshot+3",
    ],
    features: [
      "Loan Application Processing: Streamline the intake, validation, and processing of loan applications.",
      "Credit Scoring & Risk Assessment: Integrate with credit bureaus and use internal models for automated credit assessment and risk analysis.",
      "Disbursement Management: Efficiently manage loan disbursements, including partial and multiple disbursements.",
      "Repayment Tracking: Monitor repayment schedules, track outstanding balances, and manage late payments.",
      "Reporting & Analytics: Generate comprehensive reports on loan portfolio performance, risk exposure, and customer behavior.",
      "Collateral Management: Track and manage collateral associated with loans, including valuation and status updates.",
      "Customer Portal: Provide borrowers with a secure self-service portal to view their loan details, statements, and make payments.",
      "Automated Notifications: Send automated reminders and notifications for upcoming payments, overdue amounts, and policy changes.",
      "Compliance & Audit Trails: Ensure adherence to lending regulations with detailed audit trails and compliance reporting.",
    ],
    benefits: [
      "Streamlined loan operations: Automate workflows and reduce processing time.",
      "Reduced processing time: Faster loan approvals and disbursements.",
      "Improved risk assessment: Make informed lending decisions with comprehensive data.",
      "Enhanced compliance: Ensure adherence to lending regulations.",
      "Better customer experience: Provide transparency and easy access to loan information.",
      "Increased efficiency: Manage a larger loan portfolio with fewer resources.",
    ],
    pricing: {
      standard: { price: "$499/month", features: ["Up to 500 Loans", "Basic Reporting", "Customer Portal"] },
      premium: {
        price: "$999/month",
        features: ["Unlimited Loans", "Advanced Analytics", "Credit Scoring Integration", "Automated Notifications"],
      },
      enterprise: {
        price: "Custom",
        features: ["Full Customization", "Dedicated Support", "On-premise Deployment Option"],
      },
    },
    icon: Banknote,
    metadata: {
      title: "Loan Management Application - Efficient Loan Processing",
      description:
        "Secure application for managing loan applications, disbursements, and repayments with enhanced efficiency and compliance.",
    },
  },
  {
    id: 5,
    name: "Lead Management Application",
    slug: "lead-management",
    shortDescription: "Optimize your sales pipeline with a powerful lead management solution.",
    detailedDescription:
      "Our Lead Management Application is a powerful solution designed to help you capture, nurture, and convert leads more effectively. It streamlines your sales pipeline, improves team collaboration, and provides insights to optimize your marketing efforts.",
    mainImage: "/placeholder.svg?height=700&width=1000",
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Lead+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Lead+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Lead+Screenshot+3",
    ],
    features: [
      "Lead Capture: Collect leads from various sources including website forms, social media, email campaigns, and manual entry.",
      "Lead Nurturing: Automate follow-ups, email sequences, and engagement activities to nurture leads through the sales funnel.",
      "Lead Scoring: Prioritize leads based on their potential, engagement level, and demographic data using customizable scoring rules.",
      "Sales Pipeline Visualization: Get a clear, visual overview of your sales funnel.",
      "Reporting & Analytics: Generate comprehensive reports on lead performance, conversion rates, source effectiveness, and sales forecasts.",
      "Task Management: Assign and track tasks related to lead follow-up, meetings, and communication, ensuring no lead is missed.",
      "Integration with CRM: Seamlessly transfer qualified leads to your existing CRM system for further sales processing.",
      "Team Collaboration: Facilitate communication and collaboration among sales team members on lead assignments and updates.",
      "Customizable Workflows: Define and automate custom workflows for lead assignment, status updates, and notifications.",
    ],
    benefits: [
      "Increased lead conversion rates: Focus on the most promising leads.",
      "Improved sales efficiency: Automate lead processes and reduce manual work.",
      "Better lead tracking: Never lose track of a lead's status.",
      "Enhanced team collaboration: Share lead information and collaborate effectively.",
      "Optimized marketing campaigns: Understand which channels generate the best leads.",
      "Scalable growth: Manage a growing volume of leads without increasing overhead.",
    ],
    pricing: {
      basic: { price: "$49/month", features: ["Up to 1,000 Leads", "Basic Lead Capture", "Pipeline View"] },
      growth: {
        price: "$149/month",
        features: ["Up to 10,000 Leads", "Lead Scoring", "Automated Nurturing", "Advanced Reporting"],
      },
      enterprise: {
        price: "Custom",
        features: ["Unlimited Leads", "Full Customization", "Dedicated Account Manager", "CRM Integration"],
      },
    },
    icon: Briefcase,
    metadata: {
      title: "Lead Management Application - Optimize Your Sales Pipeline",
      description:
        "Powerful lead management solution to capture, nurture, and convert leads efficiently, improving sales and team collaboration.",
    },
  },
]
