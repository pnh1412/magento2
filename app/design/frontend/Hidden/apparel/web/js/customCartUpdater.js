define([
    'jquery',
    'ko',
    'Magento_Checkout/js/action/set-shipping-information',
    'Magento_Customer/js/customer-data'
], function ($, ko, setShippingInformationAction, customerData) {
    'use strict';
    console.log('halo');
    var quantity = ko.observable(1);

    return {
        quantity: quantity,

        increaseQuantity: function () {
            var currentQuantity = quantity();
            quantity(currentQuantity + 1);
            updateCart(currentQuantity + 1);
        },

        decreaseQuantity: function () {
            var currentQuantity = quantity();
            if (currentQuantity > 1) {
                quantity(currentQuantity - 1);
                updateCart(currentQuantity - 1);
            }
        }
    };

    function updateCart(newQuantity) {
        // Gửi yêu cầu cập nhật số lượng sản phẩm trong giỏ hàng
        var cartData = {
            "cartItem": {
                "quote_id": customerData.get('cart')().getQuoteId(),
                "item_id": 1, // ID của sản phẩm cần cập nhật
                "qty": newQuantity
            }
        };

        $.ajax({
            url: '/rest/default/V1/carts/mine/items',
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(cartData),
            success: function () {
                // Cập nhật thông tin giỏ hàng sau khi thay đổi số lượng sản phẩm
                setShippingInformationAction();
            },
            error: function (xhr, status, error) {
                console.error("Error updating cart: " + error);
                // Xử lý lỗi nếu cần
            }
        });
    }
});
