module default {
	type Participant {
		exchange := .<participants[is Exchange];
	}

	type Exchange {
		multi participants: Participant;
	}
}
