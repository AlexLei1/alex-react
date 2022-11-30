const user = {
	name: 'Alex',
	lastname: 'Lei',
	email: 'sasha.volkov2015@yandex.ru',
	id: 1,
	about: 'Тут я рассказываю о себе...',
	avatar: 'https://www.seekpng.com/png/full/356-3562377_personal-user.png',
};

const users = {
	0: {name: "Митя", lastname: "Водяницкий", id: 4},
	1: {name: "Паша", lastname: "Техник", id: 9},
	2: {name: "Витя", lastname: "Корг", id: 7},
	3: {name: "Эмили", lastname: "Смитс", id: 2},
	4: {name: "Таня", lastname: "Дьячук", id: 22},
	5: {name: "Оля", lastname: "Vibes", id: 14},
}

export function getUser(userId) {
	for(let i = 0; i < Object.keys(users).length; i++) {
		if (users[i].id == userId) return users[i];
	}
	return user;
}

export function getUsers(){
	return users;
}