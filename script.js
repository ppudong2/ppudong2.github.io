
document.addEventListener("DOMContentLoaded", function() {
    const auctionList = document.getElementById("auction-list");

    // Example auction items
    const auctions = [
        { name: "Golden Tools Set", description: "A complete set of golden tools.", currentBid: "500,000 Bells" },
        { name: "Nook Miles Ticket x10", description: "A set of 10 Nook Miles Tickets.", currentBid: "300,000 Bells" },
        { name: "Mystery Island Tour", description: "A guided tour to a rare mystery island.", currentBid: "800,000 Bells" }
    ];

    // Populate the auction list
    auctions.forEach(auction => {
        const auctionItem = document.createElement("div");
        auctionItem.classList.add("auction-item");
        auctionItem.innerHTML = `
            <h3>${auction.name}</h3>
            <p>${auction.description}</p>
            <p><strong>Current Bid:</strong> ${auction.currentBid}</p>
        `;
        auctionList.appendChild(auctionItem);
    });
});
