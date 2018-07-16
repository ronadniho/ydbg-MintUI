import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'

Vue.use(Router)
const Main = r => require.ensure([], () => r(require('@/views/Main')), 'Main')//主路由
const Message = r => require.ensure([], () => r(require('@/views/Message')), 'Message')//消息
const Schedule = r => require.ensure([], () => r(require('@/views/Schedule')), 'Schedule')//日程
const Work = r => require.ensure([], () => r(require('@/views/Work')), 'Work')//工作
const MailList = r => require.ensure([], () => r(require('@/views/MailList')), 'MailList')//通讯录
const Home = r => require.ensure([], () => r(require('@/views/Home')), 'Home')//我的


/*demo*/
const Demo = r => require.ensure([], () => r(require('@/views/Demo')), 'Demo')
/*js component*/
const Toast = r => require.ensure([], () => r(require('@/components/demo/Toast')), 'Toast')
const Indicator = r => require.ensure([], () => r(require('@/components/demo/indicator')), 'Indicator')
const PullDown = r => require.ensure([], () => r(require('@/components/demo/pull-down')), 'PullDown')
const PullUp = r => require.ensure([], () => r(require('@/components/demo/pull-up')), 'PullUp')
const InfiniteScroll = r => require.ensure([], () => r(require('@/components/demo/infinite-scroll')), 'InfiniteScroll')
const MessageBox = r => require.ensure([], () => r(require('@/components/demo/message-box')), 'MessageBox')
const ActionSheet = r => require.ensure([], () => r(require('@/components/demo/action-sheet')), 'ActionSheet')
const Popup = r => require.ensure([], () => r(require('@/components/demo/popup')), 'Popup')
const Swipe = r => require.ensure([], () => r(require('@/components/demo/swipe')), 'Swipe')
const Lazyload = r => require.ensure([], () => r(require('@/components/demo/lazyload')), 'Lazyload')
const Range = r => require.ensure([], () => r(require('@/components/demo/range')), 'Range')
const Progress = r => require.ensure([], () => r(require('@/components/demo/progress')), 'Progress')
const Picker = r => require.ensure([], () => r(require('@/components/demo/picker')), 'Picker')
const DatetimePicker = r => require.ensure([], () => r(require('@/components/demo/datetime-picker')), 'DatetimePicker')
const IndexList = r => require.ensure([], () => r(require('@/components/demo/index-list')), 'IndexList')
const PaletteButton = r => require.ensure([], () => r(require('@/components/demo/palette-button')), 'PaletteButton')


/*css component*/
const Header = r => require.ensure([], () => r(require('@/components/demo/header')), 'Header')
const Tabbar = r => require.ensure([], () => r(require('@/components/demo/tabbar')), 'Tabbar')
const Navbar = r => require.ensure([], () => r(require('@/components/demo/navbar')), 'Navbar')
const Button = r => require.ensure([], () => r(require('@/components/demo/button')), 'Button')
const Cell = r => require.ensure([], () => r(require('@/components/demo/cell')), 'Cell')
const CellSwipe = r => require.ensure([], () => r(require('@/components/demo/cell-swipe')), 'CellSwipe')
const Spinner = r => require.ensure([], () => r(require('@/components/demo/spinner')), 'Spinner')
const TabContainer = r => require.ensure([], () => r(require('@/components/demo/tab-container')), 'TabContainer')
const Search = r => require.ensure([], () => r(require('@/components/demo/search')), 'Search')
/*form component*/
const Switch = r => require.ensure([], () => r(require('@/components/demo/switch')), 'Switch')
const CheckList = r => require.ensure([], () => r(require('@/components/demo/checklist')), 'CheckList')
const Radio = r => require.ensure([], () => r(require('@/components/demo/radio')), 'Radio')
const Field = r => require.ensure([], () => r(require('@/components/demo/field')), 'Field')
const Badge = r => require.ensure([], () => r(require('@/components/demo/badge')), 'Badge')


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'   //重定向
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      redirect: '/main/demo',
      children: [//子路由
        {
          name: 'Message',
          path: 'message',
          component: Message
        },
        {
          name: 'Schedule',
          path: 'schedule',
          component: Schedule
        },
        {
          name: 'Work',
          path: 'work',
          component: Work
        },
        {
          name: 'MailList',
          path: 'mailList',
          component: MailList
        },
        {
          name: 'Home',
          path: 'home',
          component: Home
        },
        {
          path: 'demo',
          name: 'Demo',
          component: Demo,
        },
      ]
    },


    /*js component*/
    {
      path: '/toast',
      name: 'Toast',
      component: Toast,
    },
    {
      path: '/indicator',
      name: 'Indicator',
      component: Indicator,
    },
    {
      path: '/pull-down',
      name: 'PullDown',
      component: PullDown,
    },
    {
      path: '/pull-up',
      name: 'PullUp',
      component: PullUp,
    },
    {
      path: '/infinite-scroll',
      name: 'InfiniteScroll',
      component: InfiniteScroll,
    },
    {
      path: '/message-box',
      name: 'MessageBox',
      component: MessageBox,
    },
    {
      path: '/action-sheet',
      name: 'ActionSheet',
      component: ActionSheet,
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup,
    },
    {
      path: '/swipe',
      name: 'Swipe',
      component: Swipe,
    },
    {
      path: '/lazyload',
      name: 'Lazyload',
      component: Lazyload,
    },
    {
      path: '/range',
      name: 'Range',
      component: Range,
    },
    {
      path: '/progress',
      name: 'Progress',
      component: Progress,
    },
    {
      path: '/picker',
      name: 'Picker',
      component: Picker,
    },
    {
      path: '/datetime-picker',
      name: 'DatetimePicker',
      component: DatetimePicker,
    },
    {
      path: '/index-list',
      name: 'IndexList',
      component: IndexList,
    },
    {
      path: '/palette-button',
      name: 'PaletteButton',
      component: PaletteButton,
    },


    /*css component*/
    {
      path: '/header',
      name: 'Header',
      component: Header,
    },
    {
      path: '/tabbar',
      name: 'Tabbar',
      component: Tabbar,
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar,
    },
    {
      path: '/button',
      name: 'Button',
      component: Button,
    },
    {
      path: '/cell',
      name: 'Cell',
      component: Cell,
    },
    {
      path: '/cell-swipe',
      name: 'CellSwipe',
      component: CellSwipe,
    },
    {
      path: '/spinner',
      name: 'Spinner',
      component: Spinner,
    },
    {
      path: '/tab-container',
      name: 'TabContainer',
      component: TabContainer,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },

    /*form component*/
    {
      path: '/switch',
      name: 'Switch',
      component: Switch,
    },
    {
      path: '/checklist',
      name: 'CheckList',
      component: CheckList,
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio,
    },
    {
      path: '/field',
      name: 'Field',
      component: Field,
    },
    {
      path: '/badge',
      name: 'Badge',
      component: Badge,
    },


    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '*',
      redirect: '/'
    }
    // {
    //   path:'/Login',
    //   name:'Login',
    //   component:Login
    // }
  ]
})
