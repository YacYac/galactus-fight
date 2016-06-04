var user = prompt("You are charged with defending the Earth from Galactus. Will you BARGAIN, BEFRIEND, FIGHT, or RUN?").toUpperCase();

switch (user) {
    case 'BARGAIN':
        console.log('You agree to become The Herald of Galactus in exchange for saving Earth');
        break;
    case 'BEFRIEND':
        var squirrelGirl = prompt('Are you The Invincible Squirrel Girl?').toUpperCase();
        var peoplePerson = prompt('Are you a people person?').toUpperCase();
        if (squirrelGirl === 'YES' || peoplePerson === 'YES') {
            console.log('Turns out he was just lonely. The Earth is saved!');
        } else {
            console.log('Galactus has no timed for your silly friendship! Earth Nom Nom.');
        }
        break;
    case 'FIGHT':
        console.log('You defeat Galactus with the Nullifier');
        break;
    case 'RUN':
        var fast = prompt('Are you really fast?').toUpperCase();
        var fly = prompt('Can you fly?').toUpperCase();
        if (fast === 'YES' && fly === 'YES') {
            console.log('The Earth is doomed, but you live to fight another day. Coward!');
        } else {
            console.log('You cannot escape the reach of Galactus. You and Earth are devoured.')
        }
        break;
    default:
        console.log('YOU MUST ACT! BARGAIN, BEFRIEND, FIGHT, or RUN?');
        break;
}
