var CatStore = ((oldCatStore) => {

    let owners = [];
    

    oldCatStore.getOwners = () => {
        return owners;
    }

    oldCatStore.setAllOwners = (allOwners) => {
        owners = allOwners;
    }




    return oldCatStore
})(CatStore || {});