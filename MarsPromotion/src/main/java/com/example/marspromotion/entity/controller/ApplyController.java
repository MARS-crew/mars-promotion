package com.example.marspromotion.entity.controller;

import com.example.marspromotion.application.ApplyService;
import com.example.marspromotion.common.CommonResponse;
import com.example.marspromotion.entity.Apply;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/apply")
public class ApplyController {

    private final ApplyService applyService;

    //성공
//    @PostMapping("")
//    public Apply applyPost(@RequestBody Apply applyData){
//        return applyService.save(applyData);
//    }

    @PostMapping("")
    public CommonResponse<Apply> applyPost(@RequestBody Apply applyData){
        return CommonResponse.createSuccess(applyService.save(applyData));
    }
}
