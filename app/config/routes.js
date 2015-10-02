import React from 'react';
import Main from '../components/Main';
import Home from '../components/home/Home';
import ContactUs from '../components/contactus/ContactUs';
import Policies from '../components/policies/Policies';
import Staff from '../components/staff/Staff';
import StatutoryInfo from '../components/statutoryinfo/StatutoryInfo';
import Uniform from '../components/uniform/Uniform';
import Vacancies from '../components/vacancies/Vacancies';
import Calendar from '../components/calendar/Calendar';
import LettersHome from '../components/lettershome/LettersHome';
import Newsletters from '../components/newsletters/Newsletters';
import SchoolMenu from '../components/schoolmenu/SchoolMenu';
import {Route, DefaultRoute} from 'react-router';

export default (
	<Route name="app" path="/" handler={Main}>
		<Route name="contact-us" path="contact-us/" handler={ContactUs} />
		<Route name="policies" path="policies/" handler={Policies} />
		<Route name="staff" path="staff/" handler={Staff} />
		<Route name="statutory-info" path="statutory-info/" handler={StatutoryInfo} />
		<Route name="uniform" path="uniform/" handler={Uniform} />
		<Route name="vacancies" path="vacancies/" handler={Vacancies} />
		<Route name="calendar" path="calendar/" handler={Calendar} />
		<Route name="letters-home" path="letters-home/" handler={LettersHome} />
		<Route name="newsletters" path="newsletters/" handler={Newsletters} />
		<Route name="school-menu" path="school-menu/" handler={SchoolMenu} />
		<DefaultRoute handler={Home} />
	</Route>
);