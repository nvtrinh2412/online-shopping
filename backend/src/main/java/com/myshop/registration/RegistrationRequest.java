package com.myshop.registration;


import lombok.*;

import javax.validation.constraints.Email;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    private final String firstName;
    private final String lastName;
    @Email
    private final String email;
    private final String password;

}