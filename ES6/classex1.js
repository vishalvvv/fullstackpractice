class SocialAccount {
    username;
    email;
    password;
    nFr;
    message;
    pendingRequest;

    createAccount(username, email, password, nFr) {

        this.username = username;
        this.email = email;
        this.password = password;
        this.nFr = 0;
        this.pendingRequest = 0;
        this.message = [];
    }

    sendFriendRequest(to) {

        to.pendingRequest += 1;

    }

    sendMessages(to, msg) {

        to.message.push(msg);

    }

    acceptFriendRequest(mine, from) {

        if (mine.pendingRequest == 0) {
            console.log("No pending requests to accept");
        }

        else if (mine.pendingRequest > 0) {
            mine.nFr += mine.pendingRequest;
            from.nFr += 1;
            console.log("You have friend request from ", from.username);
        }
    }
}

var prsn1 = new SocialAccount();
prsn1.createAccount("Monica", "monica.gmail.com", "moni");
console.log(prsn1);
var prsn2 = new SocialAccount();
prsn2.createAccount("Anju", "anju.gmail.com","anju");
