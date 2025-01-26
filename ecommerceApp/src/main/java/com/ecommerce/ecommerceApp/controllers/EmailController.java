/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ecommerce.ecommerceApp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.ecommerceApp.dto.EmailRequest;
import com.ecommerce.ecommerceApp.services.EmailService;

/**
 *
 * @author zeemo
 */
@RestController
@RequestMapping("/api/emails")
public class EmailController {

    @Autowired
    private final EmailService emailService;

    @Value("${password}")
    private String password;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    /**
     * Send an email to the specified recipient.
     *
     * @param emailRequest The data for the email to be sent.
     * @return A success message if the email was sent successfully.
     */
    @PostMapping("/send")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        System.out.println("***" + password);
        return emailService.sendEmail(emailRequest.getTo(), emailRequest.getSubject(), emailRequest.getText());
    }
}
