import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import { green, pink, yellow, blue, purple } from '@mui/material/colors';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';


const DUMMY_DATA = {
    TOP_PRODUCTS_BY_SALE : [
        {Name : "Oneplus Nord", Company : "Oneplus", Sale : "$98,348", Percent : "-12.5%"},
        {Name : "Smart Band 4", Company : "Xiaomi", Sale : "$15,459", Percent : "+20.5%"},
        {Name : "Surface Pro X", Company : "Miscrosoft", Sale : "$4,589", Percent : "+32.5%"},
        {Name : "iphone 13", Company : "Apple", Sale : "$84,345", Percent : "-50.5%"},
        {Name : "Bluetooth Earphone", Company : "Beats", Sale : "$10,374", Percent : "-38.5%"},
    ],
    ICON_LOTTERY : [
      <HeadphonesOutlinedIcon/>,
      <PhoneIphoneOutlinedIcon/>,
      <LaptopChromebookOutlinedIcon/>,
      <WatchOutlinedIcon/>
    ],
    COLOR_LOTTERY : [
      green[500],
      pink[500],
      yellow[500],
      blue[500],
      purple[500]
    ],
    SALES_ACTIVITY : {
        Labels : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        SeriesA : {
            data: [2, 3, 1, 4, 5, 6, 7],
            label: 'Product A', 
            stack: 'a',
            color: '#e15759'
        },
        SeriesB : {
            data: [3, 1, 4, 2, 1, 8, 9],
            label: 'Product B',
            stack: 'a'
        }
    },
    CUSTOMER_REVIEW : {
        Labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        SeriesA : {
            data: [2, 5.5, 2, 8.5, 1.5, 5, 8],
            label : 'This Month'
        },
        SeriesB : {
            data: [3, 6.5, 3, 9.5, 2.5, 6, 9],
            label : 'Last Month',
            color : 'gray',
            id : 'lastMonthId'
        }
    },
    SESSION : {
        SeriesA : {
            data: [2, 5.5, 2, 8.5, 1.5, 5, 8],
            area: true
        },
    },
    SALES_BY_COUNTRY : [
        {
            Country : "United states of america",
            No1 : "$8,567k",
            No2 : "884k",
            Percent : "25.8%",
            isLoss : false,
            avatarSrc : "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
        },
        {
            Country : "Brazil",
            No1 : "$2,415k",
            No2 : "645k",
            Percent : "6.2%",
            isLoss : true,
            avatarSrc : "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png"
        },
        {
            Country : "India",
            No1 : "$865k",
            No2 : "148k",
            Percent : "12.4%",
            isLoss : false,
            avatarSrc : "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png"
        },
        {
            Country : "Australia",
            No1 : "$745k",
            No2 : "86k",
            Percent : "11.9% ",
            isLoss : true,
            avatarSrc : "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg"
        },
        {
            Country : "France",
            No1 : "$45k",
            No2 : "42k",
            Percent : "16.2% ",
            isLoss : false,
            avatarSrc : "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png"
        },
    ],
    PROJECT_PROGRESS : [
        {
          id: 1,
          Name: 'Alice Johnson',
          Position: 'Developer',
          Project: 'Project A',
          TasksCompleted: 25,
        },
        {
          id: 2,
          Name: 'Bob Williams',
          Position: 'Designer',
          Project: 'Project B',
          TasksCompleted: 18,
        },
        {
          id: 3,
          Name: 'Ella Davis',
          Position: 'Manager',
          Project: 'Project C',
          TasksCompleted: 75,
        },
        {
          id: 4,
          Name: 'Charlie Brown',
          Position: 'Tester',
          Project: 'Project A',
          TasksCompleted: 15,
        },
        {
          id: 5,
          Name: 'David Lee',
          Position: 'Analyst',
          Project: 'Project B',
          TasksCompleted: 90,
        },
        {
          id: 6,
          Name: 'Emma Smith',
          Position: 'Coordinator',
          Project: 'Project C',
          TasksCompleted: 50,
        },
        // Add more data here
      ],
    CUSTOMER_TRANSACTIONS : [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          amount: 50.25,
          status: 'PAID',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          amount: 30.75,
          status: 'PENDING',
        },
        {
          id: 3,
          name: 'Alice Johnson',
          email: 'alice.johnson@example.com',
          amount: 75.50,
          status: 'FAILED',
        },
        {
          id: 4,
          name: 'Bob Williams',
          email: 'bob.williams@example.com',
          amount: 42.90,
          status: 'PAID',
        },
        {
          id: 5,
          name: 'Ella Davis',
          email: 'ella.davis@example.com',
          amount: 18.60,
          status: 'PENDING',
        },
        {
          id: 6,
          name: 'Charlie Brown',
          email: 'charlie.brown@example.com',
          amount: 63.20,
          status: 'FAILED',
        },
      ],
    EARNING_REPORT_DATA : [
        { name: 'Net Profit', subheader: "12.4k Sales", percent1 : "$1,619", percent2 : "18.6%", icon : <TrendingUpOutlinedIcon color="primary" fontSize='medium'/> },
        { name: 'Total Income', subheader: "Sales, Affiliation", percent1 : "$3,571", percent2 : "39.6%", icon : <AttachMoneyOutlinedIcon color="success" fontSize='medium'/> },
        { name: 'Total Expenses', subheader: "ADVT, Marketing", percent1 : "$430", percent2 : "52.8%", icon : <CreditCardOutlinedIcon color="disabled"/> }
    ],
    COLOR_LOOKUP : {
      'Project A' : "success",
      'Project B' : "warning",
      'Project C' : "error"
    },
    TINYLINECHART_DATA : [
      { name: 'Jan', uv: 400 },
      { name: 'Feb', uv: 300 },
      { name: 'Mar', uv: 200 },
      { name: 'Apr', uv: 278 },
      { name: 'May', uv: 189 },
      { name: 'Jun', uv: 239 },
      { name: 'Jul', uv: 349 },
    ],
    NOTIFICATION_DATA : [
      "Notification 1",
      "Notification 2",
      "Notification 3",
      "Notification 4",
      "Notification 5",
      "Notification 6",
      "Notification 7",
      "Notification 8",
      "Notification 9",
      "Notification 10",
      "Notification 11",
      "Notification 12",
      "Notification 13",
      "Notification 14",
      "Notification 15"
  ],
  NOTIFICATION_DATA_TITLE : "New Message from Zyrill!",
  NOTIFICATION_DATA_SUBHEADER : "You have your message from Zyrill",
  NOTIFICATION_DATA_CONTENT : "6 days ago"
    
}

Object.freeze(DUMMY_DATA)
export default DUMMY_DATA