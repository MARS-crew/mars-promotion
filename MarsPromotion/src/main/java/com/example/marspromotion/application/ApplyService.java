package com.example.marspromotion.application;

import com.example.marspromotion.entity.Apply;
import com.example.marspromotion.repository.ApplyJpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ApplyService {
    private final ApplyJpaRepository applyJpaRepository;

    public ApplyService(ApplyJpaRepository applyJpaRepository) {
        this.applyJpaRepository = applyJpaRepository;
    }

    public Apply save(Apply apply){
        applyJpaRepository.save(apply);
        return apply;
    }

}
