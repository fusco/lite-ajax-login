# lite-ajax-login

__Magento 1.9 compliant__

magento ajax login is a magento module of gurutheme

You can found this module at http://www.magentocommerce.com/magento-connect/lite-ajax-login.html

This repository fixes an error with password confirmation in CreateAccount function 

line 203 in app/code/local/Gurutheme/Ajaxlogin/controllers/AccountController.php

    $customer->setConfirmation($this->getRequest()->getPost('confirmation'));
  
  to
  
    $customer->setPasswordConfirmation($this->getRequest()->getPost('confirmation'));
