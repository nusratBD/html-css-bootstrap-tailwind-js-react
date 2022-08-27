const name = 'NusratHurainNuha';
/[0-9]/.test(name);
// output: false

/[A-Z]/.test(name);
// output: true

/[A-Z].*[A-F]/.test(name);
//It checks one capital letter from A-Z and another capital letter A-F
//false

/[0-5]/.test('morning20');
//one item between 0-5
//true

/[0-5]/.test('morning27');
//one item between 0-5
// true

/[0-5]/.test('morning6');
//one item between 0-5
//false

/[0-5]/.test('morning62');
//one item between 0-5
// true

/(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/.test('**NusratHurainNuha**');
//two special character
// true