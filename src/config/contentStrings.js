import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VideoLabelOutlinedIcon from '@mui/icons-material/VideoLabelOutlined';

const CONTENT_STRINGS = {
    NAVIGATION : {
        DASHBOARD_LABELS_AND_ICONS : [
            { component : <HomeOutlinedIcon/>, name : "Dashboards" },
            { component : <SpaceDashboardOutlinedIcon/>, name : "Layouts" },
            { component : <StorefrontOutlinedIcon/>, name : "Front Pages"},
            { component : <EmailOutlinedIcon/>, name : "Email"},
            { component : <QuestionAnswerOutlinedIcon/>, name : "Chat"},
            { component : <CalendarMonthOutlinedIcon/>, name : "Calendar"},
            { component : <GridOnOutlinedIcon/>, name : "Kanban"},
            { component : <ShoppingCartOutlinedIcon/>, name : "eCommerce"},
            { component : <AutoStoriesOutlinedIcon/>, name : "Academy"},
            { component : <ReceiptLongOutlinedIcon/>, name : "Invoice"},
            { component : <Person2OutlinedIcon/>, name : "Users"},
            { component : <GppGoodOutlinedIcon/>, name : "Roles & Permissions"},
            { component : <WebAssetOutlinedIcon/>, name : "Pages"}
        ]
        ,
        LAYOUT_STRINGS : {
            LAYOUT_LABEL : "Layout",
            COLLAPSED_MENU : "Collpased Menu",
            CONTENT_NAVBAR : "Content navbar",
            CONTENT_NAV_SIDEBAR : "Content nav + Sidebar",
            HORIZONTAL : "Horizontal",
            WITHOUT_MENU : "Without Menu",
            WITHOUT_NAVBAR : "Without navbar",
            FLUID : "Fluid",
            CONTAINER : "Container",
            BLANK : "Blank"
        },
        FRONT_PAGES : {
            FRONT_PAGES_LABEL : "Front Pages",
            LANDING : "Landing",
            PRICING : "Pricing",
            PAYMENT : "Payment",
            CHECKOUT : "Checkout",
            HELP_CENTER : "Help Center"
        },
        APPS_AND_PAGES : "Apps & Pages",
        EMAIL : "Email",
        CHAT : "Chat",
        CALENDAR : "Calendar",
        KANBAN : "Kanban"
    },
    BODY : {
        SEARCH_BAR_HINT : "Search (Ctrl+/)",
        SEARCH_BAR_HINT_ON_FOCUS : "Search...",
        CUSTOMER_RATINGS_LABEL : "Customer Ratings",
        OVERVIEW_SALES_ACTIVITY_LABEL : "Overview & Sales Activity",
        OVERVIEW_SALES_ACTIVITY_INSTRUCTION : "Check out each column for more details",
        SESSIONS_LABEL : "Sessions",
        ORDER_LABEL : "Order",
        TOP_PRODUCTS_BY_SALES_LABEL : "Top Products by Sales",
        TOP_PRODUCTS_BY_VOLUME_LABEL : "Top Products by Volume",
        EARNING_REPORTS_LABEL : "Earning Reports",
        SALES_ANALYTICS_LABEL : "Sales Analytics",
        SALES_BY_COUNTRIES_LABEL : "Sales by Countries",
        SALES_STRATS_LABEL : "Sales Stats",
        TEAM_MEMBERS_LABEL : "Team Members",
        GENERATED_LEADS_LABEL : "Generated Leads",
        MONTHLY_REPORT_LABEL : "Monthly Report",
        CUSTOMER_TABLE_HEADERS : ["Name", "Amount", "Status", "Paid By", "Actions"],
        COUNTRY_SALES_TITLE : "Sales by Countries",
        COUNTRY_SALES_SUBHEADER : "Monthly Sales Overview",
        CUSTOMER_RATINGS_MESSAGE : "+5.0 Points from last month",
        CUSTOMER_RATING_SUMMARY : "4.0",
        EARNING_REPORT : {
            TITLE : "Earning Reports",
            SUBHEADER : "Weekly Earnings Overview"
        },
        SALES_STATS : {
            TITLE : "Sales Stats",
            BOTTOM_LABELS : ["Label 1", "Label 2"]
        },
        DATE_OPTIONS : ["Last 28 Days", "Last Month", "Last Year"],
        PROFILE_OPTIONS : ["Profile", "My Profile", "Settings", "Billing", "FAQ", "Pricing", "Log Out"],
        SHORTCUTS : [
            {
                shortCutTitle : 'Calendar',
                shortCutSub : "Appointments",
                component :  <CalendarMonthOutlinedIcon/>
            },
            {
                shortCutTitle : 'Invoice App',
                shortCutSub : "Manage Accounts",
                component :  <GppGoodOutlinedIcon/>
            },
            {
                shortCutTitle : 'User App',
                shortCutSub : "Manage Users",
                component :  <PersonOutlineOutlinedIcon/>
            },
            {
                shortCutTitle : 'Role Management',
                shortCutSub : "Permission",
                component :  <GppGoodOutlinedIcon/>
            },
            {
                shortCutTitle : 'Dashboard',
                shortCutSub : "User Profile",
                component :  <PieChartOutlineOutlinedIcon/>
            },
            {
                shortCutTitle : 'Setting',
                shortCutSub : "Account Settings",
                component :  <SettingsOutlinedIcon/>
            },
            {
                shortCutTitle : 'FAQs',
                shortCutSub : "FAQs & Articles",
                component :  <HelpOutlineOutlinedIcon/>
            },
            {
                shortCutTitle : 'Modals',
                shortCutSub : "Useful Popups",
                component :  <VideoLabelOutlinedIcon/>
            },
        ],
        SHORTCUTS_TITLE : "Shortcuts",
        ORDER_PERCENT : "-13.24%",
        ORDER_AMOUNT : "$1,286",
        TEAM_GRID_HEADERS : [
            "Name", "Project", "Task", "Progress"
        ],
        PROFILE_IMAGE_SRC : "https://i.pravatar.cc/40?u=Zyrill"
    }
}
// dark mode
// background color: #232333
// card color : #2B2C40
// icon color : #9A9BC2
// text color : #CBCBE2

// light mode 
// background color: #F5F5F9
// card color : #FFFFFF
// icon color : #697A8D
// text color : #566A7F

Object.freeze(CONTENT_STRINGS)
export default CONTENT_STRINGS