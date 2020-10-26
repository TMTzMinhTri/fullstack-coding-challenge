import dayjs from 'dayjs';

class Utils {
	formatDate(date) {
		return dayjs(date).format('DD/MM/YYYY');
	}
}

export default new Utils();
