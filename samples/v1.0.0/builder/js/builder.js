(function($) {
  $(document).ready(function() {
    $('.color-picker').colorPicker();
    $('#btn-build').on('click', build);
  });

  function build(e){
    var params = {
      customerData: "false",
      createToken: "false",
      disableZeroDocumentNumber: "false"
    };

    if($('#customerData').is(':checked')) params.customerData = "true";
    if($('#createToken').is(':checked')) params.createToken = "true";
    if($('#disableZeroDocumentNumber').is(':checked')) params.disableZeroDocumentNumber = "true";

    var encryption_key = $('#encryptionKey').val();
    var amount = $('#amount').val();
    var orderId = $('#orderId').val();
    var postbackUrl = $('#postbackUrl').val();
    var interestRate = $('#interestRate').val();
    var maxInstallments = $('#maxInstallments').val();
    var freeInstallments = $('#freeInstallments').val();
    var defaultInstallment = $('#defaultInstallment').val();
    var creditCardDiscountPercentage = $('#creditCardDiscountPercentage').val();
    var creditCardDiscountAmount = $('#creditCardDiscountAmount').val();
    var boletoDiscountPercentage = $('#boletoDiscountPercentage').val();
    var boletoDiscountAmount = $('#boletoDiscountAmount').val();
    var uiColor = $('#uiColor').val();
    var buttonText = $('#buttonText').val();
    var buttonClass = $('#buttonClass').val();
    var headerText = $('#headerText').val();
    var paymentButtonText = $('#paymentButtonText').val();
    var paymentMethods = [];
    var cardBrands = [];

    if(amount) params.amount = amount
    if(orderId) params.orderId = orderId
    if(postbackUrl) params.postbackUrl = postbackUrl
    if(interestRate) params.interestRate = interestRate
    if(maxInstallments) params.maxInstallments = maxInstallments
    if(freeInstallments) params.freeInstallments = freeInstallments
    if(defaultInstallment) params.defaultInstallment = defaultInstallment
    if(creditCardDiscountPercentage) params.creditCardDiscountPercentage = creditCardDiscountPercentage
    if(creditCardDiscountAmount) params.creditCardDiscountAmount = creditCardDiscountAmount
    if(boletoDiscountPercentage) params.boletoDiscountPercentage = boletoDiscountPercentage
    if(boletoDiscountAmount) params.boletoDiscountAmount = boletoDiscountAmount
    if(uiColor) params.uiColor = uiColor
    if(buttonText) params.buttonText = buttonText
    if(buttonClass) params.buttonClass = buttonClass
    if(headerText) params.headerText = headerText
    if(paymentButtonText) params.paymentButtonText = paymentButtonText

    if($('#creditCard').is(':checked')) paymentMethods.push('credit_card');
    if($('#boleto').is(':checked')) paymentMethods.push('boleto');
    paymentMethods = paymentMethods.join(',');
    if(paymentMethods) params.paymentMethods = paymentMethods;

    $('#card-brands-container').find('input').each(function(){
      if($(this).is(':checked')) cardBrands.push($(this).val());
    });
    cardBrands = cardBrands.join(',');
    if(cardBrands) params.card_brands = cardBrands;

    console.log(params);

    var checkout = new PagarMeCheckout.Checkout({
      encryption_key: encryption_key
    });

    checkout.open(params);
  }
})(jQuery)
