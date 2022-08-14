import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData=[
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpFill/>,
        subNav:[
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper/>
            },
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <FaIcons.FaNewspaper/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpFill/>,
        subNav:[
            {
                title: 'Reports',
                path: '/reports/reports',
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: 'Reports 2',
                path: '/reports/reports',
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: 'Reports 3',
                path: '/reports/reports',
                icon: <IoIcons.IoIosPaper/>
            },
        ]
    },
    {
        title: 'Products',
        path: '/product',
        icon: <FaIcons.FaCartPlus/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpFill/>,
        subNav:[
            {
                title: 'Users',
                path: '/product/users',
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: 'Revenue',
                path: '/product/revenue',
                icon: <IoIcons.IoIosPaper/>
            },
        ]
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople/>,
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpFill/>,
        subNav:[
            {
                title: 'Messages 1',
                path: '/messages/message1',
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: 'Messages 2',
                path: '/messages/message2',
                icon: <IoIcons.IoIosPaper/>
            },
        ]
    },
    {
        title: 'Supports',
        path: '/supports',
        icon: <IoIcons.IoMdHelpCircle/>,
    },
]