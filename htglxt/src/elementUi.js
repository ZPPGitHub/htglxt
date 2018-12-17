import Vue from 'vue'
import { button,Form,FormItem,Input,InputNumber,Message,Menu,MenuItem,RadioGroup,Submenu,
	RadioButton,MenuItemGroup,Badge,Checkbox,Dialog,MessageBox,Table,TableColumn,Loading,Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default function element () {
	Vue.use(button);
	Vue.use(Form);
	Vue.use(FormItem);
	Vue.use(Input);
	Vue.use(InputNumber);
	Vue.use(Menu);
	Vue.use(MenuItem);
	Vue.use(RadioGroup);
	Vue.use(Submenu);
	Vue.use(RadioButton);
	Vue.use(MenuItemGroup);
	Vue.use(Badge),
	Vue.use(Checkbox),
	Vue.use(Dialog),
	Vue.use(Table),
	Vue.use(TableColumn),
	Vue.use(Pagination),
	Vue.use(Loading.directive),
	Vue.prototype.$loading = Loading.service;
	Vue.prototype.$message = Message;
	Vue.prototype.$confirm = MessageBox.confirm
}