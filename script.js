
document.addEventListener("DOMContentLoaded", function() {
    const auctionList = document.getElementById("auction-list");
    const wishlist = document.getElementById("wishlist");

    // Example auction items
    const auctions = [
        { name: "황금 도구 세트", description: "완벽한 황금 도구 세트입니다.", currentBid: "500,000 벨" },
        { name: "마일 여행권 x10", description: "마일 여행권 10개 세트.", currentBid: "300,000 벨" },
        { name: "미스터리 섬 투어", description: "희귀한 미스터리 섬으로의 투어입니다.", currentBid: "800,000 벨" }
    ];

    // Example wishlist items
    const wishItems = [
        { name: "황금 물뿌리개", description: "황금 물뿌리개를 찾고 있습니다.", user: "한별섬 - 별주민" },
        { name: "핑크 코끼리 소파", description: "핑크 코끼리 소파 구해요!", user: "하늘섬 - 구름주민" },
        { name: "레어 꽃씨", description: "레어 꽃씨를 사고 싶어요.", user: "초록섬 - 나무주민" }
    ];

    // Populate the auction list
    auctions.forEach(auction => {
        const auctionItem = document.createElement("div");
        auctionItem.classList.add("auction-item");
        auctionItem.innerHTML = `
            <h3>${auction.name}</h3>
            <p>${auction.description}</p>
            <p><strong>현재 입찰가:</strong> ${auction.currentBid}</p>
        `;
        auctionList.appendChild(auctionItem);
    });

    // Populate the wishlist
    wishItems.forEach(wish => {
        const wishItem = document.createElement("div");
        wishItem.classList.add("wish-item");
        wishItem.innerHTML = `
            <h3>${wish.name}</h3>
            <p>${wish.description}</p>
            <p><strong>작성자:</strong> ${wish.user}</p>
            <button class="contact-btn">연락하기</button>
        `;
        wishlist.appendChild(wishItem);
    });
});
