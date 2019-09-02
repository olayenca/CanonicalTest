import Person from './person';

const 
		alice = new Person(0, 'Alice'),
		bob = new Person(1, 'Bob'),
		carlos =new  Person(2, 'Carlos'),
		carol = new Person(3, 'Carol'),
		charlie = new Person(4, 'Charlie'),
		chuck = new Person(5, 'Chuck'),
		dave = new Person(6, 'Dave'),
		eve = new Person(7, 'Eve'),
		mallory = new Person(8, 'Mallory'),
		peggy = new Person(9, 'Peggy'),
		trent = new Person(10, 'Trent'),
		victor = new Person(11, 'Victor'),
		walter = new Person(12, 'Walter');

const 
		a_team = new Person(90, 'The A-Team', [alice, bob, carlos], true),
		b_team = new Person(91, 'The B-Team', [peggy, trent, victor], true),
		c_team = new Person(92, 'The C-Team', [charlie, eve, a_team], true);


a_team.members.push(b_team);
b_team.members.push(c_team);

export const people3 = [alice, bob, carlos, carol, charlie, chuck, dave, eve, mallory,
peggy, trent, victor, walter, a_team, b_team, c_team]
