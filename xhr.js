var CatStore = ((oldCatStore) => {

	oldCatStore.catLoadWorks = function () {
		let catData = JSON.parse(this.responseText).cats;
		console.log("catData", catData);
	}
	oldCatStore.ownerLoadWorks = function () {
		let ownersData = JSON.parse(this.responseText).owners;
		console.log("ownersData", ownersData);
	}
	oldCatStore.shitBroke = () => {
		console.log("Shit!")
	}

	oldCatStore.catXHR = () => {
		let myCats = new XMLHttpRequest;
		myCats.addEventListener("load", CatStore.catLoadWorks)
		myCats.addEventListener("error", CatStore.shitBroke)
		myCats.open("GET", "cats.json")
		myCats.send();
	};


	oldCatStore.ownerXHR = () => {
		let myCats = new XMLHttpRequest;
		myCats.addEventListener("load", CatStore.ownerLoadWorks)
		myCats.addEventListener("error", CatStore.shitBroke)
		myCats.open("GET", "owners.json")
		myCats.send();
	};




	return oldCatStore
})(CatStore || {});