package com.example.marspromotion.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "apply")
@Getter
@Data
public class Apply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "generation")
    private String generation;

    @Column(name = "objective")
    private String objective;

    @Column(name = "reason")
    private String reason;

    @Column(name = "say")
    private String say;

    @Column(name = "del_yn")
    private String delYn;
}
