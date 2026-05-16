package com.service.cab.service;

import java.util.List;

import com.service.cab.dto.EmailIdentifier;
import com.service.cab.dto.UserDto;
import com.service.cab.entity.Trips;
import com.service.cab.entity.UserEntity;

public interface UserService {
	boolean register(UserDto userDto);
	boolean login(UserDto userDto);
	boolean forgotPassword(String email, String password);
    UserEntity getUser(UserDto userDto);
    List<Trips> getAllTripsDetails(Long id);
    List<UserEntity> getAllUsers();

//	String sendOtpToEmail(String email);
//	boolean verifyOtpEmail(String email, String otp);
//	String sendOtpToMobile(String mobileNo);
//	boolean verifyOtpMobile(String mobileNo, String otp);
}
