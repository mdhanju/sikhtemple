import tabs from './tabs';
import events from './calendarEvents';
import contentEn from './content-en';
import carouselImages from './carouselImages';

const getSelectedTab = function () {
	const selectedTab = tabs.find((item) =>
		item && item.href === window.location.pathname);
	selectedTab.active = true;
	return selectedTab;
}

let initialData = {
	app: {
		tabs,
		loading: false,
		loadingError: false,
		selectedTab: getSelectedTab(),
	},
	calendar: {
		events: events
	},
	content: contentEn,
	carousel: {
		images: carouselImages
	}
};

const serverProps = {
	...initialData
};

export default serverProps;
